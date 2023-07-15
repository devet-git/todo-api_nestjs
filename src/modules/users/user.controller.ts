import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UseFilters,
} from '@nestjs/common';
import { Response } from 'express';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';

@ApiTags('Users')
@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'Successfully',
  })
  @Get()
  getAll(@Res() res: Response) {
    const data = this.userService.findAll();
    return res.status(HttpStatus.OK).json(data);
  }

  @Post()
  async create(@Body() req: CreateUserDto, @Res() res: Response) {
    const data = await this.userService.create(req);
    if (!data) throw new HttpException('huhuh', 400);

    return res.status(HttpStatus.CREATED).json(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Res() res: Response) {
    const data = this.userService.update(id);
    if (!data) throw new HttpException('sfdf', 400);

    return res.status(HttpStatus.OK).json(data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
