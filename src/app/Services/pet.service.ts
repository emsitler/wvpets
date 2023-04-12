import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import * as firebase from "firebase/compat";
import { map } from 'rxjs/operators';

@Injectable(
    {providedIn: 'root'}
)
export class PetService{
    userEndPoint : string | null= ''
    constructor(public afAuth : AngularFireAuth, private http:HttpClient){
    }

    private baseUrl: string = "https://wvpets-71a12-default-rtdb.firebaseio.com/users/";
    
    getPetName(){
        if(localStorage.getItem('uid') != null){
            this.userEndPoint = localStorage.getItem('uid')
        }

        console.log(this.baseUrl+this.userEndPoint + '/petName.json');
        return this.http.get(this.baseUrl+this.userEndPoint + '/petName.json').pipe(map(response => response as string));
    }
    async getPetType(): Promise<string> {
        const response = await this.http.get(this.baseUrl + this.userEndPoint + '/petType.json').toPromise();
        const numberValue = response as number;
        console.log(numberValue)
        switch (numberValue) {
          case 0:
            return "https://i.imgur.com/WGV88f4.png";
          case 1:
            return "https://i.imgur.com/CSa1miy.png";
          case 2:
            console.log("Bird img retrieved");
            return "https://i.imgur.com/7PdJYIo.png";
          case 3:
            return "https://i.imgur.com/b2hVJ0T.jpg";
          default:
            return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/28cbacc7-b8f0-433a-91ac-b9e90b445c5f/dbw77tn-76d5cbda-fbc7-4ff2-b458-c2a627a95100.jpg/v1/fill/w_400,h_400,q_75,strp/red_angry_bird_pixel_art_by_galacticabys_dbw77tn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvMjhjYmFjYzctYjhmMC00MzNhLTkxYWMtYjllOTBiNDQ1YzVmXC9kYnc3N3RuLTc2ZDVjYmRhLWZiYzctNGZmMi1iNDU4LWMyYTYyN2E5NTEwMC5qcGciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.1iCHM8FK2yqkuEd8wzNCst7TKvsJn30rDInxnp1NPSs";
        }
      }
    
      async getPetSpecies(): Promise<string> {
        const response = await this.http.get(this.baseUrl + this.userEndPoint + '/petType.json').toPromise();
        const numberValue = response as number;
        console.log(numberValue)
        switch (numberValue) {
          case 0:
            return "Bear";
          case 1:
            return "Raccoon";
          case 2:
            return "Bird";
          case 3:
            return "Trout";
          default:
            return "Error";
        }
      }

      
}