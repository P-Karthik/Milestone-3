import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  isLogged : Boolean = true;
  constructor( private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.isLogged) {
      this.router.navigate(['userpage']);
      return true;
    }
    else
    {
      this.router.navigate(['home']);
      return false;
    }


  }
  
}
