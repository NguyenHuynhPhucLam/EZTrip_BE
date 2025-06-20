import { IsEmail, IsString, IsInt, Min, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  age: number;

  @IsString()
  phoneNum: string;

  @IsString()
  @IsIn(['male', 'female', 'other']) // hoặc chỉ ['male', 'female'] nếu bạn muốn đơn giản
  gender: string;
}
