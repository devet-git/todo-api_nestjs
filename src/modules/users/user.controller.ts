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
} from '@nestjs/common';
import { Response } from 'express';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { ResponseFactory } from 'src/factories/response.factory';

@ApiTags('Users')
@Controller('api/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly resFactory: ResponseFactory,
  ) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'Successfully',
  })
  @Get()
  async getAll(@Res() res: Response) {
    const data = await this.userService.findAll();
    return this.resFactory.success(res, { data });
  }

  @Post()
  async create(@Body() req: CreateUserDto, @Res() res: Response) {
    const data = await this.userService.create(req);
    if (!data) throw new HttpException('huhuh', 400);

    return this.resFactory.success(res, { data });
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() req: UpdateUserDto,
    @Res() res: Response,
  ) {
    const data = this.userService.update(id, req);
    if (!data) throw new HttpException('sfdf', 400);

    return this.resFactory.success(res, { data });
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Res() res: Response) {
    this.userService.remove(id);
    return this.resFactory.success(res, {});
  }
}
