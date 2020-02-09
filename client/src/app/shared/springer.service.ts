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
  private readonly baseUrl = 'http://api.springernature.com';
  private readonly apiKey = '2956a6999c184b87462887c5d518b26c';

  constructor(private http: HttpClient ) {}


  getDocument(book: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/meta/v2/json?q=book:"husserliana"&`)
      .pipe(
        map((data) => data)
      );
  }
}
