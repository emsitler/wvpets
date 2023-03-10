import { STRING_TYPE } from "@angular/compiler";

export class shopCard{
    img = "";
    name = "";
    description = "";

    constructor(img, name, description){
        this.img = img;
        this.name = name;
        this.description = description;
    }
}