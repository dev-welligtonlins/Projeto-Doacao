import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from 'src/app/model/campaign';
import { AlertService } from 'src/app/service/alert.service';
import { CampaignService } from 'src/app/service/campaign.service';

@Component({
  selector: 'app-campaign-disable',
  templateUrl: './campaign-disable.component.html',
  styleUrls: ['./campaign-disable.component.scss']
})
export class CampaignDisableComponent {
  constructor(
    private route: ActivatedRoute,
    private service: CampaignService,
    private alertService: AlertService
  ) { }

  registro: Campaign = <Campaign>{};

  isChecked: Boolean = false;

  checkValue(event: any){
    if(event.target.checked) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

  ngOnInit(): void {
    this.get(this.route.snapshot.params["id"]);
  }

  get(id: number): void {
    this.service.getById(id).subscribe({
      next: (result: Campaign) => {
        this.registro = result;
        console.log(this.registro);
      }
    });
  }

  submit(): void {
    this.registro.active = false;
    this.service.update(this.registro).subscribe({
      complete: () => {
        this.alertService.sendSuccessAlert();
      }
    });
  }

}
