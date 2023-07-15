import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  findAll(): string {
    return 'list all';
  }
  create(req: CreateUserDto): CreateUserDto {
    return req;
  }
  update(todoId: string): string {
    return 'update todo' + todoId;
  }
  remove(): string {
    return 'remove todo';
  }
}
