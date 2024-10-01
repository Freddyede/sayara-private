import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return request.headers.authorization.startsWith('Bearer ') &&
      (this.jwtService.verify(request.headers.authorization.split(' ')[1])).roles.roles === 'ROLE_ADMIN'
  }
}