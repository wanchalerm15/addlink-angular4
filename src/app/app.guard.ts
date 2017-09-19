import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AppGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return sessionStorage.getItem('authen') ? true : false;
    }

}