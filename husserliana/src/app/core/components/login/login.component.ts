import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from '../../../shared/auth-firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public authFirebaseService: AuthFirebaseService) { }

  email: string;
  password: string;

  ngOnInit() {}

  signUp() {
    this.authFirebaseService.signUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signIn() {
    this.authFirebaseService.signIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.authFirebaseService.signOut();
  }

}
