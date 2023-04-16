import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from 'src/app/model/campaign';
import { Institution } from 'src/app/model/institution';
import { Item } from 'src/app/model/item';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/service/alert.service';
import { CampaignService } from 'src/app/service/campaign.service';
import { InstitutionService } from 'src/app/service/institution.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-campaign-update',
  templateUrl: './campaign-update.component.html',
  styleUrls: ['./campaign-update.component.scss']
})
export class CampaignUpdateComponent {

  files: any;

  constructor(
    private route: ActivatedRoute,
    private alertService: AlertService,
    private institutionService: InstitutionService,
    private servicoLogin: LoginService,
    private campaignService: CampaignService,
  ) { }

  user: User = <User>{};

  institution: Institution = <Institution>{};

  campaign: Campaign = <Campaign>{};

  newItem: Item = <Item>{};
  //item: Item[] = Array<Item>();

  ngOnInit(): void {
    this.get(this.route.snapshot.params["id"]);

    this.user = this.getUsuario();
    //this.get(this.user.id);
    this.institutionService.getByUserId(this.user.id).subscribe({
      next: (result: Institution) => {
        this.institution = result;
        console.log(result)
      }
    });
  }

  get(id: number): void {
    this.campaignService.getById(id).subscribe({
      next: (result: Campaign) => {
        this.campaign = result;
        console.log(this.campaign);
      }
    });
  }

  submit(form: NgForm): void {
    if (this.campaign.item.length < 1) {
      alert("Não é possível cadastrar uma campanha sem itens.")
    } else {
      this.campaign.institution = this.institution;
      this.campaignService.fileUpload(this.files).subscribe({
        complete: () => {
          this.campaignService.update(this.campaign).subscribe({
            complete: () => {
              this.alertService.sendSuccessAlert();
            }
          });
        }
      });
    }
  }

  onFileChange(event: any) {
    this.files = event.target.files;
    this.campaign.cover_image = this.files[0].name;
  }

  getUsuario(): User {
    return this.servicoLogin.getUsuario();
  }

  addItem() {
    this.campaign.item.push(this.newItem);
    this.newItem = <Item>{};
  }

  removeItem(itemId: any) {
    delete this.campaign.item[itemId];
    this.campaign.item = this.campaign.item.filter(function (item) { return item; });
  }

  itemObjectUpdate(i: number, event: any): void {
    this.campaign.item[i].current_value = parseInt(event.target.value);
  }

}
