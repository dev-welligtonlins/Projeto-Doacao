import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/model/user';
import { DenounceService } from 'src/app/service/denounce.service';
import { AlertService } from 'src/app/service/alert.service';
import { Denounce } from 'src/app/model/denounce';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-denounce-list',
  templateUrl: './denounce-list.component.html',
  styleUrls: ['./denounce-list.component.scss']
})
export class DenounceListComponent {

  apiUrl: string = environment.API_URL;

  constructor(
    private denounceService: DenounceService,
    private alertService: AlertService,
    private servicoLogin: LoginService
  ) { }

  denounces: Denounce[] = Array<Denounce>();

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.denounceService.get().subscribe({
      next: (result: Denounce[]) => {
        this.denounces = result;
      }
    });
  }

  getUsuario(): User {
    return this.servicoLogin.getUsuario();
  }
}
