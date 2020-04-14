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

export class SpringerService {
  // private readonly baseUrl = 'http://api.springernature.com';
  private readonly baseUrl = 'https://www.googleapis.com';

  constructor(private http: HttpClient ) {}


  getDocument(book: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/meta/v2/json?q=book:"husserl"&`)
      .pipe(
        map((data) => data)
      );
  }

  // getDocument(book: string): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/books/v1/volumes?q={search}`)
  //     .pipe(
  //       map((data) => data)
  //     );

  //   // www.googleapis.com/books/v1/volumes?q={search%20Philosophy%20of%20Arithmetic}
  //
  }

