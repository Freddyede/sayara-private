import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { AuthService } from '../services/auth.service';
import { Response, Request } from 'express';

@Controller()
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body() user: UserDto, @Res() res: Response) {
    try {
      res.status(200).json(await this.authService.login(user));
    } catch(e) {
      res.status(500).json({ status: res.statusCode, message: e.message });
    }
  }
  @Post('register')
  async register(@Body() user: UserDto, @Res() res: Response) {
    return res.status(201).json(await this.authService.register(user));
  }
  @Post('verifyToken')
  async verifyToken(@Req() req: Request, @Res() res: Response) {
    if(req.headers.authorization.startsWith('Bearer ')){
      return res.status(200).json({ status: res.statusCode, data: await this.authService.verifyUsers(req.headers.authorization.split(' ')[1]) });
    } else {
      return  res.status(401).json({ status: res.statusCode, message: 'Invalid token' });
    }
  }
}
