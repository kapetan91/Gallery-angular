import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { GalleryComponent } from '../components/galleries/gallery/gallery.component';
import { GalleryStoreComponent } from '../components/galleries/gallery-store/gallery-store.component';
import { GalleryViewComponent } from '../components/galleries/gallery-view/gallery-view.component';

import { GuestGuard } from '../shared/guards/guest.guard';
import { AuthGuard } from '../shared/guards/auth.guard';

import { Router, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
	{
		path: '',
		component: GalleryComponent,
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [GuestGuard]
	},
	{
		path: 'register',
		component: RegisterComponent,
		canActivate: [GuestGuard]
	},
	{
		path: 'my-galleries',
		component: GalleryComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'authors/:id', 
    	component: GalleryComponent, 
    	canActivate: [AuthGuard]
	},
  { 
    path: 'create', 
    component: GalleryStoreComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'galleries/:id', 
    component: GalleryViewComponent 
  },
  { 
    path: 'edit-gallery', 
    component: GalleryStoreComponent, 
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
    	appRoutes
    )
  ],
  exports: [
  	RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
