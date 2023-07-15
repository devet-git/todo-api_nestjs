import { HttpStatus, HttpException } from '@nestjs/common';
export class UserExistedException extends HttpException {
  constructor() {
    super('User is Existed', HttpStatus.BAD_REQUEST);
  }
}
