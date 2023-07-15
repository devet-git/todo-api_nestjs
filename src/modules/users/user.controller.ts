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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@ApiTags('Users')
@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all todos' })
  @ApiResponse({
    status: 200,
    description: 'Successfully',
  })
  @Get()
  getAll(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(this.userService.findAll());
  }

  @Post()
  create(@Body() req: CreateUserDto, @Res() res: Response) {
    return res.status(HttpStatus.CREATED).json(this.userService.create(req));
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
