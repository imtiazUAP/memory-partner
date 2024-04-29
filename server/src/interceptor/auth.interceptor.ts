import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor( private authService: AuthService, private usersService: UsersService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    let tokenArray = req.headers.authorization;
    console.log('-------- AuthInterceptor tokenArray: ', tokenArray);
    if (tokenArray) {
      req.body["user"] = this.authService.decodeToken(tokenArray.split(" ")[1]).user;
    }
    console.log('------- request body user: ', req.body["user"]);

    return next
      .handle()
      .pipe(
        // tap(() => console.log(``)),
      );
  }
}