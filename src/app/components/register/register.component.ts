import { Component, OnInit } from '@angular/core';
import { AuthService } from ''
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: any = {};

  constructor(
    private authService: AuthService,
  	private router: Router) { }

  register()
  {
    this.authService.create(this.newUser)
      .subscribe(
          data => {
              this.authService.success('Registration successful', true);
              this.router.navigate(['/login']);
          },
          (err: HttpErrorResponse) => {
            alert(`${err.error.error}`);
          }
          });
  }
  ngOnInit() {
  }

}


   