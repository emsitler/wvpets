import { Component } from '@angular/core';
import { shopCard } from 'src/app/ShopComps/shop-card/shopCard.js';
import { mock_shop_list } from 'src/app/ShopComps/shop-card/mock_shop_list';

@Component({
  selector: 'app-shop-layout',
  templateUrl: './shop-layout.component.html',
  styleUrls: ['./shop-layout.component.css']
})
export class ShopLayoutComponent {
  hatCards: shopCard [] = [];
  constructor(){
    for (var item of mock_shop_list){
      console.log(item);
      this.hatCards.push(item);
    }
  }

}
