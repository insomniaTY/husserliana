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
  public setTranslation(lang: string) {
    this.translocoService.setActiveLang(lang);
  }

  ngOnInit() {
    this.translocoService.setDefaultLang('ru');
    const browserLang = this.translocoService.getActiveLang();
    this.translocoService.getTranslation(browserLang.match(/en|de/) ? browserLang : 'ru');
  }
}
