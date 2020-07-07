import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit   {


  constructor(private translocoService: TranslateService) {
  }


  // public ActiveLang(lang: string) {
  //   this.translocoService.setActiveLang(lang);
  // }

  ngOnInit() {
    this.translocoService.setDefaultLang('ru');
    this.translocoService.addLangs(['eng', 'de']);
    this.translocoService.setDefaultLang('ru');
    const browserLang = this.translocoService.getBrowserLang();
    this.translocoService.use(browserLang.match(/en|de/) ? browserLang : 'ru');
  }
}
