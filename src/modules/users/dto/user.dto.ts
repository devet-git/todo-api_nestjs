import { ApiProperty } from '@nestjs/swagger';

class ResquestUserDto {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
export class UpdateUserDto extends ResquestUserDto {}
export class CreateUserDto extends ResquestUserDto {}
