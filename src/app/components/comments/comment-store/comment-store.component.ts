import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-store',
  templateUrl: './comment-store.component.html',
  styleUrls: ['./comment-store.component.css']
})
export class CommentStoreComponent implements OnInit {

  public comments: any[] = [];
  public user = {};

  constructor(
    private commentService: CommentService,
    private authService: AuthService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() 
  {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.commentService.getComments(id)
      .subscribe(comments => {
        this.comments = comments;

    });
      
    this.user = this.authService.getUser();
  }

}
