import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class RevisarService {
  private ids: string[] = [];
  private postsUpdated = new Subject<{ ids: string[]; idsCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getIds(idsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${idsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; ids: any; maxIds: number }>(
        'http://localhost:3000/api/posts' + queryParams
      )
      .pipe(
        map(postData => {
          return {
            ids: postData.posts.map(post => {
              return {
                title: post.title,
                content: post.content,
                id: post._id,
                imagePath: post.imagePath,
                creator: post.creator
              };
            }),
            maxPosts: postData.maxPosts
          };
        })
      )
      .subscribe(transformedPostData => {
        this.posts = transformedPostData.posts;
        this.postsUpdated.next({
          posts: [...this.posts],
          postCount: transformedPostData.maxPosts
        });
      });
  }

  getIdsUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{
      _id: string;
      title: string;
      content: string;
      imagePath: string;
      creator: string;
    }>('http://localhost:3000/api/posts/' + id);
  }
}
