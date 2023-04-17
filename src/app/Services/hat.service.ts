import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import * as firebase from "firebase/compat";
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable(
    {providedIn: 'root'}
)
export class HatService{
    constructor(public afAuth : AngularFireAuth, private db:AngularFireDatabase, private http:HttpClient){
    }

    getHatImg(numberValue: number): string {
        switch (numberValue) {
          case 0:
            return "https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-brown-cowboy-hat-pixel-art-design-vector-png-image_5687029.png"; //cowboy
          case 1:
            return "https://mineblocks.com/1/wiki/images/archive/6/69/20220102150307%21Party_Hat.png"; //party hat
          case 2:
            return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/549b7b03-5bac-4cb0-8b70-37d45c800c5e/db08ann-a637291f-7e03-45f9-9ab6-95f469fbf27a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU0OWI3YjAzLTViYWMtNGNiMC04YjcwLTM3ZDQ1YzgwMGM1ZVwvZGIwOGFubi1hNjM3MjkxZi03ZTAzLTQ1ZjktOWFiNi05NWY0NjlmYmYyN2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lq0mc2ADBt4UHyik6kYqu1bjNzItQ2DUHES2incOdWs"; //wizard
          case 3:
            return "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/535dcb070108467.png"; //buckets
          case 4:
            return "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/49b9c75100963ef.png"; //chef
          case 5:
            return "https://static.wixstatic.com/media/b056b5_11c084a8d11c4aa8893ff80bdb120366~mv2.png/v1/fill/w_320,h_320,al_c,q_85,enc_auto/Santa%20Hat%20Flipped.png"; //santa
          default:
            console.log("Invalid hat type value");
            return "https://www.angrybirds.com/wp-content/uploads/2022/05/optimized-ABCOM_202203_1000x1000_CharacterDimensio_Red_journey.png";
        }
      }
}