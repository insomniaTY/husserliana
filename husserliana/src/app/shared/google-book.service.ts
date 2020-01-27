import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private readonly baseUrl = 'http://api.springernature.com';

  constructor(private http: HttpClient ) {}


  getDocument(isbn: string) {
    return this.http.get(`${this.baseUrl}/metadata/json?q={isbn}`);
  }

  // search(query: string): Observable<Book[]> {
  //   return this.http
  //   .get<{ items: Book[] }>(`${this.baseUrl}?q=${query}`)
  //   .pipe(map(books => books.items || []));
  // }

  // getById(volumeId: string): Observable<Book> {
  //   return this.http.get<Book>(`${this.baseUrl}/${volumeId}`);
  // }

}
