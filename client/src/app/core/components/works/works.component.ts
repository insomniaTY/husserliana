import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GoogleBooksService } from '../../../shared/googlebooks.service';
import {ChartDataSets, ChartElementsOptions, ChartOptions} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { map, filter } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  document$: Observable<any>;
  manual: any;

  r = [1, 3, 4, 5];
  lineChartData: ChartDataSets[] = [
    { data: [100, 42, 41, 40, 47, 45, 44, 40, 34, 26, 16], label: 'Husserl works' },
  ];

 public lineChartLabels: Label[] = [
   'Philosophie der Arithmetik',
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


  constructor(private googleBooksService: GoogleBooksService) {}

 ngOnInit() {
   this.document$ = this.googleBooksService
     .getData();

   this.googleBooksService
     .getData()
     .subscribe(response => {
       console.log((response));
     });
  }

  // public chartClicked({ event, active}: { event: MouseEvent, active: {lineChartLabels}[] }): void {
  //   const idx = active[0].xScale._ticks[3];
  //   this.springerService.getDocument('10.1007/978-94-010-0060-4')
  //     .subscribe(response => console.log(active, event, idx)
  //     );
  //  }


  public chartClicked({event, active}): void {
    if (active.length > 0) {
      const index = active[0]._index;
      const label = this.lineChartLabels[index];
      this.googleBooksService.getData()
      .pipe(
        filter(response => response === 200)
      )
      .subscribe(response => {
        console.log(response, label);
      });
    }
  }
}
