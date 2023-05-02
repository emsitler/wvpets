import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent {
  @Input() img: string;
  @Input() name: string;
  @Input() description: string;
  @Input() id: string;
  hat:boolean = false;

  constructor(private db:AngularFireDatabase, private http:HttpClient, private router:Router){
    this.id = "00"
    this.img ="No img found";
    this.name ="No img found";
    this.description ="No img found";
  }

  ngOnInit(): void{
    this.http.get("https://wvpets-71a12-default-rtdb.firebaseio.com/users/"+localStorage.getItem('uid')+"/hats/"+this.id+".json").pipe(map(response => response as boolean)).subscribe(data=>{
      this.hat = data;
      console.log("hat status: " +this.hat)
    })
  }
  hatUnlockCheck(){
    return this.hat;
  }
  unlockHat(){
    console.log("/users/"+localStorage.getItem('uid')+"/hats/"+this.id);
    this.db.object("/users/"+localStorage.getItem('uid')+"/hats/"+this.id).set(true);
    alert("Hat "+this.id+" Unlocked!")
    this.db.object("/users/"+localStorage.getItem('uid')+"/currentHat").set(parseInt(this.id));
    this.router.navigate(['/home'])
  }
  equipHat(){
    this.db.object("/users/"+localStorage.getItem('uid')+"/currentHat").set(parseInt(this.id));
    alert("Hat " + this.id+ " Equipped!")
    this.router.navigate(['/home'])
  }
}
