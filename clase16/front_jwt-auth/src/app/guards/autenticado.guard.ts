import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AutenticadoGuard implements CanActivate {
  constructor(private tokenService: TokenService) {}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot ): | Observable<boolean | UrlTree>  | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    return  this.tokenService.obtenerToken() != null
//    if (this.tokenService.obtenerToken()) {
//      return true;
//    }

//    return false;
  }
}
