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
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedModule } from './shared/shared.module';

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
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
