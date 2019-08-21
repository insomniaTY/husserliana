import { Component, OnInit, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  constructor( private translate: TranslateService ) {
    
  }
  
  ngOnInit() {
    this.translate.use('ru')
  }

  onNavigate(url: string){
    window.open(url, "_blank");
  }

}
