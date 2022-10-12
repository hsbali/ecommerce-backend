import { Module } from '@nestjs/common';
import { OperatorService } from 'src/operator/operator.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from './jwt/jwt.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, OperatorService, JwtService],
})
export class AuthModule {}
