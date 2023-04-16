import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Denounce } from 'src/app/model/denounce';
import { User } from 'src/app/model/user';
import { AdministratorService } from 'src/app/service/administrator.service';
import { DenounceService } from 'src/app/service/denounce.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-denounce-visualize',
  templateUrl: './denounce-visualize.component.html',
  styleUrls: ['./denounce-visualize.component.scss']
})
export class DenounceVisualizeComponent implements OnInit {

  constructor(
    private servicoLogin: LoginService,
    private route: ActivatedRoute,
    private denounceService: DenounceService
  ) { }

  denounce: Denounce = <Denounce>{};

  ngOnInit(): void {
    this.get(this.route.snapshot.params["id"]);
  }

  get(id: number): void {
    this.denounceService.getById(id).subscribe({
      next: (result: Denounce) => {
        this.denounce = result;
      }
    });
  }

  getUsuario(): User {
    return this.servicoLogin.getUsuario();
  }

}
