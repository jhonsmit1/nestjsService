import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request

    if (request.url === '/greet') return false;

    return true;
  }
}
export class tokenGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const request = context.switchToHttp().getRequest() as Request

    // if (!request.headers['authorization']) return false;
    const request = context.switchToHttp().getRequest();

    const token = request.headers['authorization'];

    // Si no hay token, lanza una excepción personalizada
    if (!token) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Token not found',
        description: 'You must provide a valid authorization token',
      }, HttpStatus.UNAUTHORIZED);
    }
    // Si el token es invalido 

    if (token !== 'valid-token') {
      throw new UnauthorizedException({
        status: HttpStatus.UNAUTHORIZED,
        message: 'Invalid token',
        description: 'Your token is invalid or expired. Please log in again.',
      });
    }

    return true;
  }
}
