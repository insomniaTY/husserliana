import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from '../../../shared/auth-firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authFirebaseService: AuthFirebaseService) { }

  ngOnInit() {}

  signUp() {
    this.authFirebaseService.SignUp(this.email, this.password);
  }

  signIn() {
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.authFirebaseService.SignOut();
  }
}
