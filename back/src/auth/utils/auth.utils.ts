import { UserDto } from '../dto/user.dto';
import { genSalt, hash, compare } from 'bcrypt';
import { UserEntity } from '../entity/user.entity';

export const registerUser = async (user: UserDto) => {
  const salt = await genSalt(10);
  user.password = await hash(user.password, salt);
  return user;
}

export const loginUser = async (user: UserDto, data: UserEntity) => await compare(user.password, data.password);