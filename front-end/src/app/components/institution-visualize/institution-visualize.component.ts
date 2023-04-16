import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Campaign } from 'src/app/model/campaign';
import { Follow } from 'src/app/model/follow';
import { Institution } from 'src/app/model/institution';
import { Item } from 'src/app/model/item';
import { Trust } from 'src/app/model/trust';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/service/alert.service';
import { FollowService } from 'src/app/service/follow.service';
import { InstitutionService } from 'src/app/service/institution.service';
import { LoginService } from 'src/app/service/login.service';
import { ProgressService } from 'src/app/service/progress.service';
import { TrustService } from 'src/app/service/trust.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-institution-visualize',
  templateUrl: './institution-visualize.component.html',
  styleUrls: ['./institution-visualize.component.scss']
})
export class InstitutionVisualizeComponent {

  apiUrl: string = environment.API_URL;

  constructor(
    private route: ActivatedRoute,
    private service: InstitutionService,
    private followService: FollowService,
    private trustService: TrustService,
    private alertService: AlertService,
    private progressService: ProgressService,
    private servicoLogin: LoginService
  ) { }

  user: User = <User>{};

  institution: Institution = <Institution>{
    follows: <Array<Follow>>[],
    trusts: <Array<Follow>>[],
    campaigns: <Array<Campaign>>[],
  };

  ngOnInit(): void {
    this.get(this.route.snapshot.params["id"]);
    this.user = this.getUsuario();
    /*if (this.institution.follows !== undefined) {
      if (this.institution.follows.length !== undefined) {
        if (this.institution.follows.length > 0) {
          this.followsCount = this.institution.follows.length;
          this.trustsCount = this.institution.trusts.length;
        }
      }
    }*/
  }

  get(id: number): void {
    this.service.getById(id).subscribe({
      next: (result: Institution) => {
        this.institution = result;
        console.log(this.institution);
      }
    });
  }

  registerFollow(donorId: number, institutionId: number): void {
    this.followService.getByDonorId(donorId, institutionId).subscribe({
      next: (result: Follow) => {
        if (result) {
          //this.alertService.sendSuccessAlert("Você não pode seguir novamente!");
          this.alertService.sendSuccessAlert("Você Desseguiu com sucesso!");
          this.followService.delete(result.id).subscribe({
            next: (result: any) => {
              console.log(result);
              this.institution.follows.pop();
            }
          });
        } else {
          let follows = <Follow>{};
          follows.user = <User>{};
          follows.user.id = donorId;
          follows.institution = <Institution>{};
          follows.institution.id = institutionId;
          this.followService.insert(follows).subscribe({
            next: (result: Follow) => {
              this.institution.follows.push(result);
              this.alertService.sendSuccessAlert();
            }
          });
        }

      }
    });
  }

  registerTrust(donorId: number, institutionId: number): void {
    this.trustService.getByDonorId(donorId, institutionId).subscribe({
      next: (result: Trust) => {
        if (result) {
          //this.alertService.sendSuccessAlert("Você não pode marcar como confiável novamente!");
          this.alertService.sendSuccessAlert("Você Desconfiou com sucesso!");
          this.trustService.delete(result.id).subscribe({
            next: (result: any) => {
              console.log(result);
              this.institution.trusts.pop();
            }
          });
        } else {
          let trusts = <Trust>{};
          trusts.user = <User>{};
          trusts.user.id = donorId;
          trusts.institution = <Institution>{};
          trusts.institution.id = institutionId;
          this.trustService.insert(trusts).subscribe({
            next: (result: Trust) => {
              this.institution.trusts.push(result);
              this.alertService.sendSuccessAlert();
            }
          });
        }

      }
    });
  }

  calculateProgress(items: Item[]): number {
    return this.progressService.calculateProgress(items);
  }

  getUsuario(): User {
    return this.servicoLogin.getUsuario();
  }

}
