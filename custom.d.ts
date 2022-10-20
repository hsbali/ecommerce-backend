import { Operator } from '@prisma/client';

declare global {
  namespace Express {
    interface Request {
      user?: Operator;
    }
  }
}
