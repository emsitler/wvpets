import { STRING_TYPE } from "@angular/compiler";

export class shopCard{
    img = "";
    name = "";
    description = "";
    id = "";

    constructor(img, name, description, id){
        this.img = img;
        this.name = name;
        this.description = description;
        this.id = id;
    }
}