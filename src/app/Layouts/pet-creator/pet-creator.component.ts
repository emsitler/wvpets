import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PetService } from 'src/app/Services/pet.service';

@Component({
  selector: 'app-pet-creator',
  templateUrl: './pet-creator.component.html',
  styleUrls: ['./pet-creator.component.css']
})
export class PetCreatorComponent {
    petName: string = '';
    petType: number=-1;
    previewImg:string = '';
    tempPetSpecies:string='';
  
    constructor(private db:AngularFireDatabase, private pet:PetService, private router:Router){}
    onSubmit() {
      if (!this.petName || !this.petType) {
        alert('Please input a value for both fields.');
        return;
      }
      if(this.petName.length>16){
        alert("Your pet name is too long!");
      }
      console.log(`Pet Name: ${this.petName}`);
      console.log(`Pet Type: ${this.petType}`);
      console.log(this.petType);
      if(this.petType == 0){
        this.previewImg = "https://i.imgur.com/WGV88f4.png"
        this.tempPetSpecies="Bear";
      }else if(this.petType == 1){
        this.previewImg = "https://i.imgur.com/zkcaI52.png";
        this.tempPetSpecies="Raccoon";
      }else if(this.petType == 2){
        this.previewImg = "https://i.imgur.com/lXV9rDl.png";
        this.tempPetSpecies="Cardinal";
      }else if(this.petType == 3){
        this.previewImg = "https://i.imgur.com/HXw7BJr.png";
        this.tempPetSpecies="Trout";
      }else if(this.petType == 4){
        this.previewImg = "https://cdn.discordapp.com/attachments/777963501255393311/1097591407755137145/n7m6oh4erix71.webp";
        this.tempPetSpecies="Cat";
      }
    }

    submitForReals(){
      if (!this.petName || !this.petType) {
        alert('Please input a value for both fields.');
        return;
      }
      if (this.petName.length > 16) {
        alert('PetName is too long!');
        return;
      }

      this.db.object("users/" + localStorage.getItem('uid') + "/petName").set(this.petName);
      this.db.object("users/" + localStorage.getItem('uid') + "/petType").set(this.petType);
      this.db.object("users/" + localStorage.getItem('uid') + "/currentHat").set(-1);
      alert("Pet Successfully Created! Get out there champ!")
      this.router.navigate(['/home']);
      return;
    }
}
