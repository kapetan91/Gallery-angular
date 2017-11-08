import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../shared/models/user.model';

@Injectable()
export class AuthService {

	public isAuthenticated: boolean;

  public user: User[] = [];

  constructor(private http: HttpClient) {
  	this.isAuthenticated = !!window.localStorage.getItem('loginToken');
  }

  public getUser() 
  {
    return JSON.parse(localStorage.getItem('user'));
  }

  login(email: string, password: string)
  {
  	return new Observable((o: Observer<any>) =>
  	{
  		this.http.post('http://localhost:8000/api/login', {
  			'email': email,
  			'password': password
  		})
  		.subscribe(
  			(data: {token: string}) => {
  				window.localStorage.setItem('loginToken', data.token);
  				this.isAuthenticated = true;

  				o.next(data.token);
  				return o.complete();
  			},
  			(err) => {
  				//samo proslediti
  				return o.error(err);
  			}
  		);
  	});
  }

  public register(user: User)
  {
    return new Observable((o: Observer<any>) => {
      this.http.post('http://localhost:8000/api/register', {
        'firstName': user.firstName,
        'lastName': user.lastName,
        'email': user.email,
        'password': user.password,
      },
      {
        headers: this.getRequestHeaders(),
      })
      .subscribe(
        (u: any) => {
          let newU = new User(u.id, u.first_name, u.last_name, u.email, u.password);
          this.user.push(newU);
          o.next(newU);
                return o.complete();
              }
            )
    });
  }

  public getRequestHeaders()
  {
  	return new HttpHeaders().set('Authorization', 'Bearer' + window.localStorage.getItem('loginToken'));

  }

  public logout()
  {
  	window.localStorage.removeItem('loginToken');
  	this.isAuthenticated = false;
  }
}
