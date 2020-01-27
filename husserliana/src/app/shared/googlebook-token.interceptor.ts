import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class GoogleBookInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const withKeyRequest = req.clone({
      params: req.params.set('api_key', '2956a6999c184b87462887c5d518b26c')
    });
    return next.handle(withKeyRequest);
  }
}
