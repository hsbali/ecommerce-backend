import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOperatorDto, UpdateOperatorDto } from './dto';

@Injectable()
export class OperatorService {
  constructor(private prisma: PrismaService) {}

  async create(
    createOperatorDto: CreateOperatorDto,
    options?: { [key: string]: any },
  ) {
    const operator = await this.prisma.operator.create({
      data: createOperatorDto,
    });

    // Do not perform any operation on operator if it does not exist
    if (!operator) return operator;

    if (!options || (options && !options.withPassword))
      delete operator.password;

    return operator;
  }

  findAll() {
    return `This action returns all operator`;
  }

  async findOne(id: number, options?: { [key: string]: any }) {
    const operator = await this.prisma.operator.findUnique({
      where: { id },
    });

    // Do not perform any operation on operator if it does not exist
    if (!operator) return operator;

    if (!options || (options && !options.withPassword))
      delete operator.password;

    return operator;
  }

  async findOneByEmail(email: string, options?: { [key: string]: any }) {
    const operator = await this.prisma.operator.findUnique({
      where: { email },
    });

    // Do not perform any operation on operator if it does not exist
    if (!operator) return operator;

    if (!options || (options && !options.withPassword))
      delete operator.password;

    return operator;
  }

  update(id: number, updateOperatorDto: UpdateOperatorDto) {
    return `This action updates a #${id} operator`;
  }

  remove(id: number) {
    return `This action removes a #${id} operator`;
  }
}
