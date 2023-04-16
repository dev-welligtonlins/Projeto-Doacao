import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Administrator } from 'src/app/model/administrator';
import { User } from 'src/app/model/user';
import { AdministratorService } from 'src/app/service/administrator.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-administrator-visualize',
  templateUrl: './administrator-visualize.component.html',
  styleUrls: ['./administrator-visualize.component.scss']
})
export class AdministratorVisualizeComponent {

  constructor(
    private servicoLogin: LoginService,
    private route: ActivatedRoute,
    private administratorService: AdministratorService
  ) { }

  administrator: Administrator = <Administrator>{};

  ngOnInit(): void {
    this.get(this.route.snapshot.params["id"]);
  }

  get(id: number): void {
    this.administratorService.getById(id).subscribe({
      next: (result: Administrator) => {
        this.administrator = result;
      }
    });
  }

  getUsuario(): User {
    return this.servicoLogin.getUsuario();
  }

}
