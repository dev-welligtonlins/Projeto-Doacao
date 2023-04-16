import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign } from 'src/app/model/campaign';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/model/user';
import { CampaignService } from 'src/app/service/campaign.service';
import { ProgressService } from 'src/app/service/progress.service';
import { AlertService } from 'src/app/service/alert.service';
import { Enjoy } from 'src/app/model/enjoy';
import { Donor } from 'src/app/model/donor';
import { Item } from 'src/app/model/item';
import { Institution } from 'src/app/model/institution';
import { Address } from 'src/app/model/address';
import { InstitutionService } from 'src/app/service/institution.service';
import { environment } from 'src/environments/environment';
import { EnjoyService } from 'src/app/service/enjoy.service';

@Component({
  selector: 'app-campaign-visualize',
  templateUrl: './campaign-visualize.component.html',
  styleUrls: ['./campaign-visualize.component.scss']
})
export class CampaignVisualizeComponent implements OnInit {

  apiUrl: string = environment.API_URL;
  frontUrl: string = environment.FRONT_URL;

  constructor(
    private route: ActivatedRoute,
    private campaignService: CampaignService,
    private enjoyService: EnjoyService,
    private institutionService: InstitutionService,
    private progressService: ProgressService,
    private alertService: AlertService,
    private servicoLogin: LoginService,
    private router: Router
  ) { }

  isCampaignOfThisInstitution: boolean = false;

  campaign: Campaign = <Campaign>{};
  url: string = this.apiUrl + "/campanhas/visualizar/" + this.campaign.id/*'https://www.google.com/'*/ /*new URL(window.location.href).origin + this.router.url */

  user: User = <User>{};

  institution: Institution = <Institution>{
    address: <Address>{},
    user: <User>{}
  };

  institutionLogged: Institution = <Institution>{
    address: <Address>{},
    user: <User>{}
  };

  ngOnInit(): void {
    this.get(this.route.snapshot.params["id"]);
    this.user = this.getUsuario();
    //this.institutionService.getByCampaignId(this.campaign.id);
    //this.get(this.user.id);
  }

  get(id: number): void {
    this.campaignService.getById(id).subscribe({
      next: (result: Campaign) => {
        this.campaign = result;

        this.institutionService.getByCampaignId(this.campaign.id).subscribe({
          next: (result: Institution) => {
            this.institution = result;
          }
        });

        //console.log(this.campaign);
        if (this.user.id) { // ???
          this.institutionService.getByUserId(this.user.id).subscribe({
            next: (result: Institution) => {
              this.institutionLogged = result;
              //console.log(result);
              for (let i = 0; i < this.institutionLogged.campaigns.length; i++) {
                let thatCampaign = this.institutionLogged.campaigns[i];
                if (this.campaign.id == thatCampaign.id) {
                  this.isCampaignOfThisInstitution = true;
                }
              }
            }
          });

        }

      }
    });
  }

  registerEnjoy(donorId: number, campaignId: number): void {
    console.log(donorId, campaignId)
    this.campaignService.getEnjoyByDonorId(donorId, campaignId).subscribe({
      next: (result: Enjoy) => {
        console.log(result);

        if (result) {
          //this.alertService.sendSuccessAlert("Você não pode dar like novamente!");
          this.alertService.sendSuccessAlert("Você deu deslike!");
          this.enjoyService.delete(result.id).subscribe({
            next: (result: any) => {
              console.log(result);
              this.campaign.enjoys.pop();
            }
          });
          //console.log("EXISTS");
        } else {
          let enjoy = <Enjoy>{};
          enjoy.user = <User>{};
          enjoy.user.id = donorId;
          enjoy.campaign = <Campaign>{};
          enjoy.campaign.id = campaignId;
          this.campaignService.insertEnjoy(enjoy).subscribe({
            next: (result: Enjoy) => {
              this.campaign.enjoys.push(result);
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

  calculateItemProgress(item: Item): number {
    return item.current_value / item.required_value * 100;
  }

  getUsuario(): User {
    return this.servicoLogin.getUsuario();
  }

  openFacebook(): void {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(this.url) + '&t=' + encodeURIComponent('facebook'));
  }



}

