import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { UserDto } from '../dto/user.dto';
import { loginUser, registerUser } from '../utils/auth.utils';
import { JwtService } from '@nestjs/jwt';
import 'dotenv/config'
import * as process from 'node:process';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService) {}

  async login(user: UserDto) {
    const userDatabase = await this.userRepository.findOneBy({ email: user.email });
    const isOnline = await loginUser(user, userDatabase);
    if(!isOnline) {
      throw new Error('Invalid email / password');
    }
    return {status: 200, data: {token: this.jwtService.sign({ ...userDatabase }), user: { ...userDatabase }}}
  }

  async register(user: UserDto) {
    try {
      user.roles = {roles: 'ROLE_USER'};
      await registerUser(user);
      await this.userRepository.save(user);
      return {status: 201, message: 'User created successfully.'};
    } catch (e) {
      throw e;
    }
  }

  async verifyUsers(userJwt: string) {
    return this.jwtService.verify(userJwt, {secret: process.env.JWT_SECRET});
  }
}
