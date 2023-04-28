import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import * as firebase from "firebase/compat";
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { PostCard } from "../post-ui/post.card";

@Injectable(
    {providedIn: 'root'}
)
export class PostService{
    constructor(private db:AngularFireDatabase){}
    
    getPosts(){
        return this.db.list<PostCard>("posts").valueChanges();
    }

    addPost(pst:PostCard){
        this.db.list<PostCard>("posts").push(pst);
    }
}