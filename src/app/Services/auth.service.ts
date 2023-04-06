import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  //login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => { // if we logged in successfully
        localStorage.setItem('token', 'true');
        this.router.navigate(['/home']);
      },
      e => { // if an error occured
        alert(e.message);
        console.error(e.message);
        this.router.navigate(['']);
      });
  }

  //register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert("Your account has been successfuly created. Now just log in!")
        this.router.navigate(['']);
      },
      e => {
        alert('An error occured while creating an account.');
        console.error(e.message);
        this.router.navigate(['']);
      });
  }

  //sign out
  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['']);
      },
      e => {
        alert('An error occured while logging out.')
        console.error(e.message);
      }
    );
  }

}
