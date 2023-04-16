import { Component } from '@angular/core';
import { PetService } from 'src/app/Services/pet.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {

  petImg: string = '';
  constructor(private pet: PetService) {
  }
async ngOnInit(): Promise<void> {
  this.pet.getPetNum().subscribe(data =>{
    let petNum = parseInt(data);
    this.petImg = this.pet.getPetType(petNum);
  })
  }


}
