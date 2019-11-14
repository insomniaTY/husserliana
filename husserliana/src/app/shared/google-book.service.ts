import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders,
      HttpErrorResponse,
      HttpEvent,
      HttpInterceptor,
      HttpHandler,
      HttpRequest,
      HttpResponse } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class GoogleBookService {
  private readonly baseUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient ) {}

  search(query: string): Observable<Book[]> {
    return this.http
    .get<{ items: Book[] }>(`${this.baseUrl}?q=${query}`)
    .pipe(map(books => books.items || []));
  }

  getById(volumeId: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${volumeId}`);
  }

}
