import { NestMiddleware } from '@nestjs/common';
import { Response, Request, NextFunction } from 'express';

export class ResponseFormatMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    // res.locals.response = {
    //   statusCode: res.statusCode,
    //   message: 'Success',
    //   data: {},
    // };

    next();
  }
}
