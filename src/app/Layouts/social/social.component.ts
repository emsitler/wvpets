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
    this.petImg = await this.pet.getPetType();
  }


}
