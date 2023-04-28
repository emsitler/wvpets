import { PetService } from "../Services/pet.service";

export class PostCard{
    title : string;
    body: string;
    user: string;
    petNum :string;
    currentHat :string;
    time : string;

    constructor(title:string, body:string, user:string, petNum:string, currentHat: string, time:string, private pet: PetService){
        this.title = title;
        this.body = body;
        this.user = user;
        this.petNum = petNum;
        this.currentHat = currentHat;
        this.time = time;
    }
}