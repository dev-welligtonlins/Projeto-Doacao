import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donor } from 'src/app/model/donor';
import { User } from 'src/app/model/user';
import { DonorService } from 'src/app/service/donor.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-donor-visualize',
  templateUrl: './donor-visualize.component.html',
  styleUrls: ['./donor-visualize.component.scss']
})
export class DonorVisualizeComponent implements OnInit {

  constructor(
    private servicoLogin: LoginService,
    private route: ActivatedRoute,
    private donorService: DonorService
  ) { }

  donor: Donor = <Donor>{};

  ngOnInit(): void {
    this.get(this.route.snapshot.params["id"]);
  }

  get(id: number): void {
    this.donorService.getById(id).subscribe({
      next: (result: Donor) => {
        this.donor = result;
      }
    });
  }

  getUsuario(): User {
    return this.servicoLogin.getUsuario();
  }

}
