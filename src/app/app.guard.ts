import { Injectable } from '@angular/core';
import { CanDeactivate, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AppGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return sessionStorage.getItem('authen') ? true : false;
    }

}

@Injectable()
export class AppDeactiveGuard implements CanDeactivate<ICanDeactivate> {

    canDeactivate(component: ICanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return component.confirmAction();
    }

}


export interface ICanDeactivate {
    confirmAction(): boolean;
}