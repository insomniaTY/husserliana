import {Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Renderer2} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpringerService } from '../../../shared/springer.service';
import { Book } from '../../../shared/book';
import {ChartDataSets, ChartElementsOptions, ChartOptions} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { map } from 'rxjs/operators';

import {fromEvent, Observable, pipe} from 'rxjs';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  document$: Observable<any>;
  manual: any;
  books = ['A', 'B', 'C'];


  r = [1, 3, 4, 5];
  lineChartData: ChartDataSets[] = [
    { data: [100, 42, 41, 40, 47, 45, 44, 40, 34, 26, 16], label: 'Husserl works' },
  ];

 private lineChartLabels: Label[] = ['Philosophie der Arithmetik',
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


 constructor(private springerService: SpringerService) {}

 ngOnInit() {
   this.document$ = this.springerService
     .getDocument('978-1-4020-3574-6');

   this.springerService
     .getDocument('978-1-4020-3574-6')
     .subscribe(response => {
       console.log((response));
     });
  }

  public chartClicked({ event, active}: { event: MouseEvent, active: {lineChartLabels}[] }): void {
   this.springerService.getDocument('978-1-4020-3574-6')
     .subscribe(response => {
       console.log(response, this.lineChartLabels.length, active, event);
     });
  }

//   chartClick(eventObj) {
//     if (eventObj.active.length) { const activeElem = eventObj.active[0];
//       if (activeElem){
//      console.log(activeElem._index)
// }}}


  // public chartClick({ event, active }: { event: MouseEvent, active: {lineChartLabels}[] }): void {
  //   this.springerService.getDocument('978-1-4020-3574-6')
  //     .subscribe(response => {
  //       console.log(response, this.lineChartLabels, event, active);
  //     });
  // }
 }

