import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-new-account-page',
  templateUrl: './new-account-page.component.html',
  styleUrls: ['./new-account-page.component.css']
})
export class NewAccountPageComponent {
  
  email : string = ''
  password : string = '';

  constructor(private auth : AuthService) { }
  ngOnInit() : void{
  }

  register(){
    if(this.email ==''){
      alert('Please enter an email.');
      return;
    }
    if(this.password ==''){
      alert('Please enter a password.');
      return;
    }

    this.auth.register(this.email, this.password);
    this.email='';
    this.password='';
  }
}
