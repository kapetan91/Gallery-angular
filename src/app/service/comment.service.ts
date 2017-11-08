import { Injectable } from '@angular/core';
import { Auth Service } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observer, Observable } from 'rxjs';

@Injectable()
export class CommentService {

	public comments: any[] = [];

  constructor(private httpClient: HttpClient,
  	private authService: AuthService) { } 

  public comments(cId)
  {
  	return new Observable((o: Observer<any>) => {
  		this.http.get(`http://localhost:8000/api/galleries/${Id}comments`)
  		.subscribe((c:any[]) => {
  			this.comments = c;
  			o.next(c);
  			return o.complete();
  		}, (err) => {
  			return o.error(err);
  		});
  	});
  }

  public addComment(comment: Comment, cId)
  {
  	const user = 
  		this.auth.getUser();
  		return new Observable((o: Observer<any>) => {
  			this.http.post(`http://localhost:8000/api/comments`, {
  			'body': comment,
  			'gallery_id': cId,
  			'user_id': user.id
  			}).subscribe(comment => {
  			o.next(comment);
  			return o.complete();
  		});
  	});
  }
}
