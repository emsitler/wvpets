import { Component } from '@angular/core';
import { shopCard } from 'src/app/ShopComps/shop-card/shopCard.js';
import { mock_shop_list } from 'src/app/ShopComps/shop-card/mock_shop_list';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-shop-layout',
  templateUrl: './shop-layout.component.html',
  styleUrls: ['./shop-layout.component.css']
})
export class ShopLayoutComponent {
  hatCards: shopCard [] = [];
  constructor(private router:Router, private db:AngularFireDatabase){
    for (var item of mock_shop_list){
      console.log(item);
      this.hatCards.push(item);
    }
  }

  creator(){
    this.router.navigate(['/petCreator']);
  }
  unlockHat(){
    console.log('/users/'+localStorage.getItem('uid')+'/hats/')
  }
  noHat(){
    this.db.object("/users/"+localStorage.getItem('uid')+"/currentHat").set(-1);
    alert("Hat Removed!")
    this.router.navigate(['/home'])
  }
}
