import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../service/comment.service';
import { AuthService } from '../../service/auth.service';
import { User } from '../../shared/model/user.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
	
	public comments: any[] = [];
  public user = {};

  constructor(
  private commentService: CommentService,
  private authService: AuthService,
  private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

  	let id = parseInt(this.route.snapshot.paramMap.get('id'));
  	this.commentService.getComments(id)
  	.subscribe(comments => {
  		this.comments = comments;
  	});

  	this.user = this.authService.getUser();
  }

}
