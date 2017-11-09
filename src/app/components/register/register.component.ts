import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<User>();

  public user = new User();

  constructor(
    private authService: AuthService,
  	private router: Router) { }

  public register()
  {
  this.authService.register(this.user)
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


   