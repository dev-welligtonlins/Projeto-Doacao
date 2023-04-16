import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private servicoLogin: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const autenticado = this.servicoLogin.verificaLogin();
    console.log("Autenticado: " + autenticado);
    if (autenticado) {
      const papelExigido = route.data['roles'];
      const papelUsuario = this.servicoLogin.getUsuario().role;
      if (papelExigido && !papelExigido.includes(papelUsuario)) {
        //return false;
        return this.router.navigate(['/login']);
      }
      return true;
    }
    if(route.data['isAccessible']) {
      return true;
    } else {
      return this.router.navigate(['/login']);
    }
    //return false;
  }

}
