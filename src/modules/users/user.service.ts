import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserExistedException } from './user.exception';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async create(data: CreateUserDto): Promise<CreateUserDto | null> {
    const existedUser = await this.userRepo.findBy({ email: data.email });
    if (existedUser.length) return null;

    const newUser = this.userRepo.create(data);
    await this.userRepo.save(newUser);

    return data;
  }

  async update(id: string): Promise<User | null> {
    const updatedUser = await this.userRepo.findOneBy({ id });
    if (updatedUser) return null;
    return this.userRepo.save(updatedUser);
  }

  async remove(id: string): Promise<void> {
    await this.userRepo.delete(id);
  }
}
