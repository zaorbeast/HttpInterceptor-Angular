import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ExerciceInterceptor implements HttpInterceptor {

  constructor() {}


intercept(request: HttpRequest<unknown>, next: HttpHandler){
  let ModifieReq=request.clone({
    headers:request.headers.append('X-Api-Key','+L7aMooJq8SwGNxLvlxDrg==2Bp0RknyISBaCUYc')
  })
      return next.handle(ModifieReq);
    }




}
