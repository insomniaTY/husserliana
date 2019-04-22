import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition, animation } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  constructor( private translate: TranslateService ) {
    translate.setDefaultLang('ru');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
