import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { OperatorService } from 'src/operator/operator.service';
import { JwtService } from 'src/auth/jwt/jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private operatorService: OperatorService,
  ) {}

  private extractAccessTokenFromAuthorizationHeader(req: Request) {
    if (!req.header('Authorization')) return null;

    return req.header('Authorization').split(' ')[1];
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const ctx = context.switchToHttp();
      const req = ctx.getRequest<Request>();

      const token = this.extractAccessTokenFromAuthorizationHeader(req);
      if (!token) throw new UnauthorizedException('Access denied');

      const decodedToken = this.jwtService.verifyAccessToken(token);

      const operator = await this.operatorService.findOne(decodedToken.sub);
      if (!operator) throw new UnauthorizedException('Access denied');

      req.user = operator;

      return true;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException('Access denied');
    }
  }
}
