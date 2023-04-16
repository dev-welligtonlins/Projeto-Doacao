import {Component, OnInit} from '@angular/core';
import {Administrator} from "../../model/administrator";
import {AdministratorService} from "../../service/administrator.service";
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-administrator-list',
  templateUrl: './administrator-list.component.html',
  styleUrls: ['./administrator-list.component.scss'],
})
export class AdministratorListComponent implements OnInit {

  constructor(
    private administratorService: AdministratorService,
    private servicoLogin: LoginService
  ) { }

  administrators: Administrator[] = Array<Administrator>();

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.administratorService.get().subscribe({
      next: (result: Administrator[]) => {
        this.administrators = result;
      }
    });
  }

  getUsuario(): User {
    return this.servicoLogin.getUsuario();
  }

}
