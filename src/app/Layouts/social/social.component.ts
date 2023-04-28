import { Component } from '@angular/core';
import { PetService } from 'src/app/Services/pet.service';
import { PostService } from 'src/app/Services/post.service';
import { PostCard } from 'src/app/post-ui/post.card';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  posts : PostCard[] = []

  constructor(private fetch:PostService, private pet:PetService){
  }
  ngOnInit(): void{
    this.fetch.getPosts().subscribe((data:PostCard[]) =>{
      for(var x of data){
        console.log(x);
        this.posts.push(x)
      }
    })
  }
  addItem(post:PostCard){
    var temp = localStorage.getItem("uid")
    if(temp !== null){
      post.user = temp
    }
    temp = localStorage.getItem("petNum")
    if(temp !== null){
      post.petNum = temp
    }
    temp = localStorage.getItem("currentHat")
    if(temp !== null){
      post.currentHat = temp
    }
    console.log("button clicked!")
    console.log(post);
    this.fetch.addPost(post);
    location.reload();
  }
}
