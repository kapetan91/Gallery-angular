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

  private newUser = new User();

  constructor(
    private authService: AuthService,
  	private router: Router) { }

  register(newUser)
  {
  this.authService.register(newUser)
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


   