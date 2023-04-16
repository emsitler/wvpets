export class newUser {
    email: string;
    foodNum: number;
    money: number;
    petName: string;
    petType: number;
    hats: Boolean[];

    constructor(email: string){
        this.email = email;
        this.foodNum = 10;
        this.money = 100;
        this.petName = "..."
        this.petType = 5
        this.hats = [false, false, false, false, false, false, false, false];

    }
}