import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http } from '@angular/http';
import { Observer, Observable } from 'rxjs';
import { Response } from '@angular/http';
@Injectable()
export class CommentService {

	public comments = [];

  constructor(private http: Http,
  	private authService: AuthService) { } 

  public gComments(cId ?)
  {
  	return new Observable((o: Observer<any>) => {
  		this.http.get(`http://localhost:8000/api/galleries/${cId}comments`)
  		.subscribe((c: Response) => {
        console.log(c);
  			
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
  		this.authService.getUser();
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
