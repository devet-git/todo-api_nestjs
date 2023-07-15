import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
  findAll(): string {
    return 'list all';
  }
  create(req: CreateTodoDto): CreateTodoDto {
    return req;
  }
  update(todoId: string): string {
    return 'update todo' + todoId;
  }
  remove(): string {
    return 'remove todo';
  }
}
