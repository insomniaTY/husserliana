import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class SpringerService {
  private readonly baseUrl = 'http://api.springernature.com';

  constructor(private http: HttpClient ) {}


  getDocument(issn: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/metadata/json?q=isbn`);
  }
}
