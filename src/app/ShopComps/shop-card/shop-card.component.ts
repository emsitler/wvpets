import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent {
  @Input() img: string;
  @Input() name: string;
  @Input() description: string;

  constructor(){
    this.img ="No img found";
    this.name ="No img found";
    this.description ="No img found";
  }
  ngOnInit(): void{
    
  }
}
