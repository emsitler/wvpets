import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { PetService } from 'src/app/Services/pet.service';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HatService } from 'src/app/Services/hat.service';

@Component({
  selector: 'app-pet-layout',
  templateUrl: './pet-layout.component.html',
  styleUrls: ['./pet-layout.component.css']
})
export class PetLayoutComponent implements OnInit {
  petName: string = '';
  petImg: string = '';
  petSpecies: string ='';
  foodNum: number = 0;
  money: number = 0;
  currentHat: number = -1;
  hatImg:string='';

  constructor(private auth : AuthService, private pet: PetService, private http:HttpClient, private db:AngularFireDatabase, private router:Router, private hat:HatService) {
  }
  async ngOnInit(): Promise<void> {
    let petNum:number;
    this.pet.getPetName().subscribe(data => {
      this.petName = <string>data;
      if(this.petName == '...'){
        this.router.navigate(['/petCreator'])
      }
    })
    this.pet.getPetNum().subscribe(data =>{
      petNum = parseInt(data);
      localStorage.setItem("petNum", data)
      this.petSpecies = this.pet.getPetSpecies(petNum);
      this.petImg = this.pet.getPetType(petNum);
    }) //pet type is completely fucking irrepareably broken. im going crazy. why cant it just wait 8 picoseconds until it moves on. FUCK YOUUUUUUU

    this.http.get("https://wvpets-71a12-default-rtdb.firebaseio.com/users/" +localStorage.getItem('uid')+ "/foodNum.json").pipe(map(response => response as number)).subscribe(data =>{
      this.foodNum = <number>data;
    });
    this.http.get("https://wvpets-71a12-default-rtdb.firebaseio.com/users/" +localStorage.getItem('uid')+ "/money.json").pipe(map(response => response as number)).subscribe(data =>{
      this.money = <number>data;
    });
    this.http.get("https://wvpets-71a12-default-rtdb.firebaseio.com/users/" +localStorage.getItem('uid')+ "/currentHat.json").pipe(map(response => response as number)).subscribe(data =>{
      this.currentHat = <number>data;
      localStorage.setItem("currentHat", data.toString());
      this.hatImg = this.hat.getHatImg(this.currentHat);
      if(this.hatImg == ''){
        window.location.reload();
      }
    });
  }

  logout(){
    this.auth.logout();
  }
  feed(){
    alert("You hand fed " +this.petName+". They loved it.")
  }
}
