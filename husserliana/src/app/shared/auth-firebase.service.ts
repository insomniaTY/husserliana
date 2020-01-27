import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthFirebaseService {
  userData: Observable<firebase.User>;
  constructor(private angularFireAuth: AngularFireAuth) {
  this.userData = angularFireAuth.authState;
  }

  signUp(email: string, password: string) {
  this.angularFireAuth
  .auth
  .createUserWithEmailAndPassword(email, password)
  .then(res => {
    console.log('You are Successfully signed up!', res);
  })
  .catch(error => {
    console.log('Something is wrong:', error.message);
  });
  }

  signIn(email: string, password: string) {
  this.angularFireAuth
  .auth
  .signInWithEmailAndPassword(email, password)
  .then(res => {
    console.log('You are Successfully logged in!');
  })
  .catch(err => {
    console.log('Something is wrong:', err.message);
  });
  }

  signOut() {
  this.angularFireAuth
  .auth
  .signOut();
    }
  }

