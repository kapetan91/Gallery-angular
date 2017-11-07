import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CommentComponent } from './components/comments/comment/comment.component';
import { CommentStoreComponent } from './components/comments/comment-store/comment-store.component';
import { GalleryComponent } from './components/galleries/gallery/gallery.component';
import { GalleryViewComponent } from './components/galleries/gallery-view/gallery-view.component';
import { GalleryStoreComponent } from './components/galleries/gallery-store/gallery-store.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RegisterComponent,
    LoginComponent,
    CommentComponent,
    CommentStoreComponent,
    GalleryComponent,
    GalleryViewComponent,
    GalleryStoreComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
