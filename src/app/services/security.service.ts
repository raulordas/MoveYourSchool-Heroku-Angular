import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SecurityService implements CanActivate {
  private usuario: string = 'admin';
  private password: string = 'admin';
  private autenticado: boolean = false;

  constructor() {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.autenticado) {
      console.log('AUtenticado con exito');
      return true;
    } else {
      console.error('bloqueado por el guard');
    }
  }

  login(user: string, pass: string) {

    if (user === this.usuario && pass === this.password) {
      console.log('AUtenticado con exito');
      return this.autenticado = true;
    } else {
      console.log('Fracaso en la autenticaion');
      return false;
    }
  }

  logOut() {
    this.autenticado = false;
  }

  getState() {
    return this.autenticado;
  }
}
