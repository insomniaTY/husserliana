import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, 
      HttpErrorResponse, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class SpringerApiService {
  private response: any;
  private isbn: string;
  private doi: string;
  private metadata: string;
  private metaversioned: any;
  private api_token: string = ('http://api.springernature.com/metadata/pam/doi/10.1007/s11276-008-0131-4?api_key=2956a6999c184b87462887c5d518b26c');

  
  constructor(private _http: HttpClient ) {}

  getData(): Observable<any> {
    return this._http.get(this.api_token)
    .pipe(map(this.response = this.response));
  }
}
