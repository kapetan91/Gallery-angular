import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';


const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent,
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
		component: HomeComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'authors/:id', 
    	component: HomeComponent, 
    	canActivate: [AuthGuard	
	},
  { 
    path: 'create', 
    component: StoreGalleryComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'galleries/:id', 
    component: ShowGalleryComponent 
  },
  { 
    path: 'edit-gallery', 
    component: StoreGalleryComponent, 
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
