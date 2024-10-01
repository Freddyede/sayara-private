import { IsEmail, IsEmpty, IsStrongPassword } from 'class-validator';

export class UserDto {
  @IsEmail()
  email: string;
  @IsStrongPassword({
    minUppercase: 2,
    minLength: 8,
    minLowercase: 2,
    minNumbers: 2,
    minSymbols:2
  })
  password: string;
  @IsEmpty()
  roles: {roles: string};
}