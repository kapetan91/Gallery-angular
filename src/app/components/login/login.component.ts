import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  constructor(private authService: AuthService,
  			  private router: Router) {
  }

  login(email, password)
  {
    this.authService.login(email, password)
      .subscribe(
        () => {
          this.router.navigateByUrl('/');
        },
        (err: HttpErrorResponse) => {
          alert(`${err.error.error}`);
        }
      );
  }

  ngOnInit() {
  }

}
