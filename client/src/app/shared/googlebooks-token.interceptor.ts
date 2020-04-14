import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class GoogleBooksInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const withKeyRequest = req.clone({
      params: req.params.set('api_key', 'AIzaSyBK5y9D8MF_6z3UASi5BLUP49pC-pltedU')
    });

    return next.handle(withKeyRequest);
  }
}
