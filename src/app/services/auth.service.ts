import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, public router: Router) {}

  signIn(email: any, password: any) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['admin/products']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signUp(email: any, password: any) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['sign-in']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  logOut() {
    this.afAuth
      .signOut()
      .then(() => {
        this.router.navigate(['sign-in']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
