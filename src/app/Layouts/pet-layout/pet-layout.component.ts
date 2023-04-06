import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-pet-layout',
  templateUrl: './pet-layout.component.html',
  styleUrls: ['./pet-layout.component.css']
})
export class PetLayoutComponent implements OnInit {
  
  constructor(private auth : AuthService) {
  }
  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }
}
