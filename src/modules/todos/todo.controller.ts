import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';

import { Response } from 'express';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/todo.dto';

@ApiTags('Todos')
@Controller('api/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all todos' })
  @ApiResponse({
    status: 200,
    description: 'Successfully',
  })
  @Get()
  getAll(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(this.todoService.findAll());
  }

  @Post()
  create(@Body() req: CreateTodoDto, @Res() res: Response) {
    return res.status(HttpStatus.CREATED).json(this.todoService.create(req));
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return 'ahah' + id;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return 'fsfsd' + id;
  }
}
