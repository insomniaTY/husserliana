import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { getBrowserLang } from '@ngneat/transloco';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit   {


  constructor(private translocoService: TranslocoService) {
  }
  // public setTranslation(lang: string) {
  //   this.translocoService.setActiveLang(lang);
  // }

  ngOnInit() {
    this.translocoService.setDefaultLang('ru');
    this.translocoService.addLangs(['eng', 'de']);
    this.translocoService.setDefaultLang('ru');
    this.translocoService.setActiveLang(lang);
    const browserLang = this.translocoService.getBrowserLang();
    this.translocoService.use(browserLang.match(/en|de/) ? browserLang : 'ru');
  }
}
