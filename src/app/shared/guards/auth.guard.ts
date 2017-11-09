import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private router: Router,
		private authService: AuthService
		) { }

	canActivate(
		activatedRouteSnapshot: ActivatedRouteSnapshot,
		routerStateSnapshot: RouterStateSnapshot
		) {
			if (!this.authService.isAuthenticated) {
				return true;
			}		

			this.router.navigateByUrl('login');
			return false;	
	}
}