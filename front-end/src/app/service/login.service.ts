import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private autenticado: boolean = false;
  private usuario: User = <User>{};

  isAutenticado(): boolean {
    return this.autenticado;
  }

  isAdmin(): boolean {
    return this.usuario.role == "ROLE_ADMIN";
  }

  getUsuario(): User {
    return this.usuario;
  }

  login(usuario: User): void {

    this.usuario = usuario;
    const credenciaisCodificadas = btoa(usuario.username + ':' + usuario.password);
    console.log(credenciaisCodificadas);
    const opcoesHttp = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + credenciaisCodificadas
      })
    };

    const url = environment.API_URL + '/login/';
    this.http.get<User>(url, opcoesHttp).subscribe({
      next: (usuario: User) => {
        if (usuario) {
          this.autenticado = true;
          this.usuario = usuario;
          sessionStorage.setItem('usuario', JSON.stringify(usuario));
          this.router.navigate(['/']);
        }
      }
    });
  }

  logout(): void {

    const url = environment.API_URL + '/logout';
    this.http.get(url).subscribe({
      complete: () => {
        this.autenticado = false;
        this.usuario = <User>{};
        sessionStorage.removeItem('usuario');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 500);
      }
    });

  }

  verificaLogin(): boolean {

    if (!this.isAutenticado()) {
      this.usuario = JSON.parse(
        sessionStorage.getItem('usuario') || '{}'
      );
      if (Object.keys(this.usuario).length > 0) {
        this.autenticado = true;
      } else {
        //this.router.navigate(['/login']);
      }

    }

    return this.isAutenticado();

  }

}
