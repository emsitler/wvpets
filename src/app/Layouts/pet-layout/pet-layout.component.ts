import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { PetService } from 'src/app/Services/pet.service';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-pet-layout',
  templateUrl: './pet-layout.component.html',
  styleUrls: ['./pet-layout.component.css']
})
export class PetLayoutComponent implements OnInit {
  petName: string = 'tiddlywinks';
  petImg: string = '';
  petSpecies: string ='';
  

  constructor(private auth : AuthService, private pet: PetService, private http:HttpClient) {
  }
  async ngOnInit(): Promise<void> {
    this.pet.getPetName().subscribe(data => {
      this.petName = <string>data;
    })
    this.petImg = await this.pet.getPetType();
    this.petSpecies = await this.pet.getPetSpecies();
  }

  logout(){
    this.auth.logout();
  }
  feed(){
    this.http.put("https://wvpets-71a12-default-rtdb.firebaseio.com/users/JHQwPBu9ynPBLomoymhW3A56I3a2/petName.json", JSON.stringify("DOOKIE SPLIFF"));
    console.log(JSON.stringify("dokie dokie")) // this doesnt work wtf
  }
}
