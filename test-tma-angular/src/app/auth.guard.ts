import { Injectable } from '@angular/core';
import {Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {first, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(
    private router: Router,
    private authService: AuthService
    ) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     let currentUser: any ;
     this.authService.getAuthStatus()
     .pipe(
       switchMap(authState => {
         if (authState.state === 'connected') {
           return currentUser = authState.state;
         }
         return of();
       })
     ).subscribe();

      console.log('currentUser', currentUser);
      if (currentUser === 'connected') {
        // authorised so return true
        return true;
      }
      // not logged in so redirect to login page
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
  }
}
