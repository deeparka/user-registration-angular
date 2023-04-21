import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post | undefined;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _postService: PostService,
  ) {}
  ngOnInit() {
    const id =
      this._activatedRoute.snapshot.paramMap !== null
        ? this._activatedRoute.snapshot.paramMap.get('id')
        : null;

    this._postService.getPost(id).subscribe((post) => {
      this.post = post;
    });
  }
}
