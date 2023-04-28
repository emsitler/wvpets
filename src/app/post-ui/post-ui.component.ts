import { Component, OnInit, Input } from '@angular/core';
import { PetService } from '../Services/pet.service';
import { HatService } from '../Services/hat.service';

@Component({
  selector: 'app-post-ui',
  templateUrl: './post-ui.component.html',
  styleUrls: ['./post-ui.component.css']
})
export class PostUIComponent implements OnInit{
  @Input() title: string;
  @Input() body: string;
  @Input() user: string;
  @Input() petNum: string;
  @Input() currentHat: string;
  @Input() time: string;
  petImg: string;
  hatImg: string;
  showHat: boolean;

  constructor(private pet:PetService, private hat:HatService){
    this.title = "...";
    this.body = "...";
    this.user = "...";
    this.petNum = "...";
    this.currentHat = "...";
    this.time = "...";
    this.petImg = '';
    this.hatImg = '';
    this.showHat = false;
  }
  ngOnInit(): void{
    this.petImg = this.pet.getPetType(parseInt(this.petNum))
    this.hatImg = this.hat.getHatImg(parseInt(this.currentHat));
    if(this.currentHat == "-1"){
      this.showHat = false;
    }else{
      this.showHat = true;
    }
  }
}
