import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from '../components/filter/filter.component';
import { AuthService } from '../service/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';
import { CommentStoreComponent } from '../components/comments/comment-store/comment-store.component';
import { GalleryStoreComponent } from '../components/galleries/gallery-store/gallery-store.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClient,
    FormsModule
  ],
  declarations: [FilterComponent],
  providers: [
  	AuthService,
  	AuthGuard,
  	GuestGuard,
  	CommentStoreComponent,
  	GalleryStoreComponent
  ],
  	exports: [
  	FilterComponent,
  	FormsModule
  ]
})
export class SharedModule { }
