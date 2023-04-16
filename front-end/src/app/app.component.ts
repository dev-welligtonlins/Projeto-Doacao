import { Component, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {LoginService} from "./service/login.service";
import {User} from "./model/user";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'doacao-app';

  constructor(private servicoLogin: LoginService) { }

  isAutenticado(): boolean {
    return this.servicoLogin.isAutenticado();
  }

  isAdmin(): boolean {
    return this.servicoLogin.isAdmin();
  }

  getUsuario(): User {
    return this.servicoLogin.getUsuario();
  }

  logout(): void {
    this.servicoLogin.logout();
  }
}


