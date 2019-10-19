import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpringerApiService } from '../../../shared/springer-api.service'
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit{
  @Input() name: string;

  document$: Observable<any>;
  manual: any;

 constructor(private SpringerService: SpringerApiService) {}

 ngOnInit() {
   this.document$ = this.SpringerService.getDocument('10.1007/BF01201962');

   this.SpringerService
   .getDocument('10.1007/BF01201962')
   .subscribe(
     (result) => this.manual = result,
     (error) => console.log(error),
     () => console.log('request complete')
   )
 }
}
