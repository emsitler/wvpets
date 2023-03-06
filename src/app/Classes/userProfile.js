import { Pet } from './Pet.js'

class userProfile {
    
    constructor(username, password, email){
        this.username = username;
        this.password = password;
        this.email = email;
        this.hatStates = new Array(8).fill(false);
        this.pet = null;
    }

    updateHatState(index){
        this.hatStates[index] = true;
    }
    storePet(newPet){
        this.pet = newPet;
    }
  };