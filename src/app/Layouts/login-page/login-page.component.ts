import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  
  email : string = ''
  password : string = '';

  constructor(private auth : AuthService){}

  ngOnInit(): void {
  }

  login(){
    if(this.email ==''){
      alert('Please enter an email.');
      return;
    }
    if(this.password ==''){
      alert('Please enter a password.');
      return;
    }

    this.auth.login(this.email, this.password);
    this.email='';
    this.password='';
  }

}
