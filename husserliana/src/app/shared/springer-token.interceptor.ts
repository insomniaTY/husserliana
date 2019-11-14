import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthKeyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const withKeyRequest = req.clone({
      params: req.params.set('api_key', 'AIzaSyCSMZ1MWbjpgZvOS6J-d1cdM5BPpVEjPy8')
    });

    return next.handle(withKeyRequest);
  }
}
