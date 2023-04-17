import { Component } from '@angular/core';
import { PetService } from '../Services/pet.service';
import { HttpClient } from '@angular/common/http';
import { HatService } from '../Services/hat.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-post-ui',
  templateUrl: './post-ui.component.html',
  styleUrls: ['./post-ui.component.css']
})
export class PostUIComponent {
  constructor(private pet: PetService, private http:HttpClient, private hat:HatService){
  }                          
  title = "Example Title";                 //temp vars, will later be retrieved with post form / user methods
  body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  pfp = "https://avatars.githubusercontent.com/u/122303078?s=96&v=4"
  petImg = ''
  currentHat = -1;
  hatImg = '';
  async ngOnInit(): Promise<void>{
    this.pet.getPetNum().subscribe(data =>{
      let petNum = parseInt(data);
      this.petImg = this.pet.getPetType(petNum);
    })

    this.http.get("https://wvpets-71a12-default-rtdb.firebaseio.com/users/" +localStorage.getItem('uid')+ "/currentHat.json").pipe(map(response => response as number)).subscribe(data =>{
      this.currentHat = <number>data;
      this.hatImg = this.hat.getHatImg(this.currentHat);
      if(this.hatImg == ''){
        window.location.reload();
      }
    });
  }
  
}
