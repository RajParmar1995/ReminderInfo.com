import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    debugger
    const authinfo = {
      authenticated: window.localStorage.getItem("UserId"),
      authenticatedToken: window.localStorage.getItem("Token")
    };

    if (authinfo.authenticated == null || authinfo.authenticatedToken == null ) {
      this.router.navigate(["authentication/login"]);
    }
    return true;
  }
}
