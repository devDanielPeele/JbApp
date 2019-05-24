import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor() { }

  getPosts() {
    // copies les valeures du array posts dans un nouveaux array.
    return [...this.posts];
  }

  getPostsUpdatedListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post){
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }



}
