import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GalleryService } from '../service/gallery.service';
import { CommentService } from '../service/comment.service'; 


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  providers: [
  	GalleryService,
    CommentService,
    HttpClient
  ],
  	exports: [
  	FormsModule
  ]
})
export class SharedModule { }
