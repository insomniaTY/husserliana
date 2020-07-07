import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flip', [
      state('initial', style({
       transform: 'rotateY(179.9deg',
       width: '400px',
       height: '400px'
      })),
      state('final', style({
        transform: 'rotateY(0)',
        width: '600px',
        height: '600px'
      })),
      transition('initial <=> final', animate(700)),
      transition('initial => final', animate(700))
    ])
  ],
  // providers: [
  //   {
  //
  //   }
  // ]
})

export class HomeComponent implements OnInit {

changeImageState = 'initial';

  constructor(private translocoService: TranslateService,
              private wowService: NgwWowService,
              ) {
  }

  ngOnInit() {
    this.translocoService.use('ru');
    this.wowService.init();
  }

  reset() {
    this.wowService.init();
  }

}
