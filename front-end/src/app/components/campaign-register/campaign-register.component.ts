import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign } from 'src/app/model/campaign';
import { Institution } from 'src/app/model/institution';
import { Item } from 'src/app/model/item';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/service/alert.service';
import { CampaignService } from 'src/app/service/campaign.service';
import { InstitutionService } from 'src/app/service/institution.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-campaign-register',
  templateUrl: './campaign-register.component.html',
  styleUrls: ['./campaign-register.component.scss']
})
export class CampaignRegisterComponent implements OnInit {

  files: any;

  constructor(
    private campaignService: CampaignService,
    private InstitutionService: InstitutionService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private servicoLogin: LoginService) { }

  user: User = <User>{};

  institution: Institution = <Institution>{};

  campaign: Campaign = <Campaign>{};
  newItem: Item = <Item>{};
  item: Item[] = Array<Item>();

  ngOnInit(): void {
    this.user = this.getUsuario();
    //this.get(this.user.id);
    this.InstitutionService.getByUserId(this.user.id).subscribe({
      next: (result: Institution) => {
        this.institution = result;
        if (result == null) {
          alert("Não tem instituição vinculada com esse usuário!");
        }

        if (this.institution.pending == false) {
          alert("Você precisa ser validado por um administrador para poder cadastrar campanhas!")
        }
      }
    });
  }

  submit(form: NgForm): void {
    this.campaign.item = this.item;
    if (this.campaign.item.length < 1) {
      alert("Não é possível cadastrar uma campanha sem itens.")
    } else {
      this.campaign.institution = this.institution;
      console.log(this.campaign);

      if (this.files) {

        this.campaignService.fileUpload(this.files).subscribe({
          complete: () => {
            //console.log("File to upload!");
            this.campaignService.insert(this.campaign).subscribe({
              complete: () => {
                form.resetForm();
                this.alertService.sendSuccessAlert();
                this.router.navigate(['/campanhas']);
              }
            });
          }
        });

      } else {
        this.campaignService.insert(this.campaign).subscribe({
          complete: () => {
            form.resetForm();
            this.alertService.sendSuccessAlert();
            this.router.navigate(['/campanhas']);
          }
        });
      }

      this.item = Array<Item>();
    }
  }

  onFileChange(event: any) {
    this.files = event.target.files;
    this.campaign.cover_image = this.files[0].name;
  }

  getUsuario(): User {
    return this.servicoLogin.getUsuario();
  }

  full() {
    console.log("Autocompleted");
    this.campaignService.getGenerate().subscribe({
      next: (result: Campaign) => {
        console.log(result);
        this.campaign = result;
        this.item = this.campaign.item;
      }
    });
  }

  addItem() {
    this.item.push(this.newItem);
    console.log(this.item)
    this.newItem = <Item>{};
  }

  removeItem(itemId: any) {
    delete this.item[itemId];
    this.item = this.item.filter(function (item) { return item; });
  }

}
