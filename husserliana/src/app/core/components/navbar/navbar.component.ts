import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 searchValue = '';
 searchPlaceHolder = '';
 searchField = 'amount';
  constructor() { }

  ngOnInit() {
  }

}
