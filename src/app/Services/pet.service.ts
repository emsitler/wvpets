import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import * as firebase from "firebase/compat";
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable(
    {providedIn: 'root'}
)
export class PetService{
    userEndPoint : string | null= ''
    constructor(public afAuth : AngularFireAuth, private db:AngularFireDatabase, private http:HttpClient){
    }

    private baseUrl: string = "https://wvpets-71a12-default-rtdb.firebaseio.com/users/";
    
    getPetName(){
        if(localStorage.getItem('uid') != null){
            this.userEndPoint = localStorage.getItem('uid')
        }
        console.log(this.baseUrl+this.userEndPoint + '/petName.json');
        return this.http.get(this.baseUrl+this.userEndPoint + '/petName.json').pipe(map(response => response as string));
    }
    getPetNum(){
      if(localStorage.getItem('uid') != null){
        this.userEndPoint = localStorage.getItem('uid')
      }
      console.log(this.baseUrl+this.userEndPoint + '/petType.json');
      return this.http.get(this.baseUrl+this.userEndPoint + '/petType.json').pipe(map(response => response as string));
    }

    getPetType(numberValue: number): string {
      switch (numberValue) {
        case 0:
          return "https://i.imgur.com/WGV88f4.png"; //bear
        case 1:
          return "https://i.imgur.com/CSa1miy.png"; //raccoon
        case 2:
          return "https://i.imgur.com/lXV9rDl.png"; //cardinal
        case 3:
          return "https://i.imgur.com/HXw7BJr.png"; //trout
        default:
          console.log("Invalid pet type value");
          return "https://www.angrybirds.com/wp-content/uploads/2022/05/optimized-ABCOM_202203_1000x1000_CharacterDimensio_Red_journey.png";
      }
    }
    
      getPetSpecies(numberValue:number) {
        switch (numberValue) {
          case 0:
            return "Bear";
          case 1:
            return "Raccoon";
          case 2:
            return "Cardinal";
          case 3:
            return "Trout";
          default:
            return "Error";
        }
      }

      
}