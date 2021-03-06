import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
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

  getData() {
    return this.http.get(`${this.baseUrl}/books/v1/volumes?q=inauthor:husserl`)
    .pipe(
      map((data) => data)
    );
  }
  getBooks(queryField: string) {
    return this.http.get(`${this.baseUrl}/books/v1/volumes?q=${queryField}&maxResults`);
  }
}
