import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const authinfo = {
      authenticated: window.localStorage.getItem("UserId")
    };
    if (authinfo.authenticated == null) {
      this.router.navigate(["authentication/login"]);
    }
    return true;
  }
}
