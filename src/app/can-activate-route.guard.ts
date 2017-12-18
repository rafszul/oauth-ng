import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot } from '@angular/router';

import { AuthService } from './core/auth.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(public auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.auth.isAuthenticated();
  }
}
