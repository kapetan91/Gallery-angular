import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  providers: [
  	AuthService,
    HttpClient
  ],
  	exports: [
  	FormsModule
  ]
})
export class SharedModule { }
