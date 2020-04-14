import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import { Book } from './book';

import { map } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class GoogleBooksService {
  private readonly baseUrl = 'https://www.googleapis.com';

  constructor(private http: HttpClient ) {}

  getDocument(book: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/books/v1/volumes?q={search}`)
      .pipe(
        map((data) => data)
      );

  //   // www.googleapis.com/books/v1/volumes?q={search%20Philosophy%20of%20Arithmetic}
  //
  }
}
