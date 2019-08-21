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
 constructor(private SpringerService: SpringerApiService) {}
  
  ngOnInit() {
    return this.SpringerService.getData()
    .subscribe(res => res)
  }

}