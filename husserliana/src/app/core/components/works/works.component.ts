import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GoogleBookService } from '../../../shared/google-book.service';
import { Book } from '../../../shared/book';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  document$: Observable<any>;
  manual: any;
  lineChartData: ChartDataSets[] = [
    { data: [100, 42, 41, 40, 47, 45, 44, 40, 34, 26, 16], label: 'Husserl works' },
  ];

  lineChartLabels: Label[] = ['Philosophie der Arithmetik',
  'Untersuchungen zur Phänomenologie',
  'Psychologische Studien zur elementaren Logik',
  'Prolegomena zur reinen Logik',
  'Logische Untersuchungen. Erster Teil',
  'Logische Untersuchungen. Zweiter Teil',
  'Jahrbuch für phänomenologische Forschung',
  'Ideen zu einer reinen Phänomenlogie',
  'Die Krisis der europäischen Wissenschaften und die Psychologie',
  'Die Krisis der europäischen Wissenschaften und die transzendentale Phänomenologie'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(35, 135, 0, 0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
 constructor(private googleBookService: GoogleBookService) {
 }

 ngOnInit() {
  this.document$ = this.googleBookService.getDocument('10.1007/BF01201962');
  console.log(this.document$);
 }

}
