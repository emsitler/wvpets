import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "https://wvpets-71a12-default-rtdb.firebaseio.com/users";
  userID : string | null = null;
  constructor(private fireauth : AngularFireAuth, private router : Router, private http:HttpClient) { }

  //login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => { // if we logged in successfully
        localStorage.setItem('token', 'true');
        this.fireauth.currentUser.then(data => {
          if(data != null){
            console.log(data.uid)
            localStorage.setItem('uid', data.uid)
            console.log(localStorage)
          }
        })
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
        this.http.put(this.baseUrl + '.json', "{poop}")
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
