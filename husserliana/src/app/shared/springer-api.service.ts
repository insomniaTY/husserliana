import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders,
      HttpErrorResponse,
      HttpEvent,
      HttpInterceptor,
      HttpHandler,
      HttpRequest,
      HttpResponse } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class SpringerApiService {
  private readonly baseUrl = 'https://api.springernature.com';

  constructor(private http: HttpClient ) {}

  getDocument(isbn: string) {
    return this.http.get(`${this.baseUrl}/metadata/json?q=${isbn}`);
  }

}
