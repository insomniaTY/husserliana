import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  api: string = '2956a6999c184b87462887c5d518b26c';
  response: any;

  constructor(private http: HttpClient) { }
  
}
