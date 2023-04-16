import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/model/user';
import { DonorService } from 'src/app/service/donor.service';
import { AlertService } from 'src/app/service/alert.service';
import { Donor } from 'src/app/model/donor';
import { ActivatedRoute, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.scss']
})
export class DonorListComponent {
  constructor(
    private route: ActivatedRoute,
    private donorService: DonorService,
    private alertService: AlertService,
    private servicoLogin: LoginService
  ) { }

  donors: Donor[] = Array<Donor>();
  pagination: any;
  fakeArray: any;

  ngOnInit(): void {
    let page: String = '';
    this.route.queryParams.forEach(param => { page = param['page'] });
    if (page){
      this.get(page);
    }
    else{
      this.get('0');
    }
  }

  get(page: String): void {
    this.donorService.get(page).subscribe({
      next: (result: any) => {
        this.pagination = result;
        this.fakeArray = new Array(this.pagination.totalPages)
        this.donors = result.content;
      }
    });
  }

  getUsuario(): User {
    return this.servicoLogin.getUsuario();
  }
}
