import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from ''
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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


   