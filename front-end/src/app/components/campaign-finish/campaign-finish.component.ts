import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign } from 'src/app/model/campaign';
import { AlertService } from 'src/app/service/alert.service';
import { CampaignService } from 'src/app/service/campaign.service';

@Component({
  selector: 'app-campaign-finish',
  templateUrl: './campaign-finish.component.html',
  styleUrls: ['./campaign-finish.component.scss']
})
export class CampaignFinishComponent implements OnInit {
  constructor(
    private service: CampaignService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute) { }

  registro: Campaign = <Campaign>{};

  ngOnInit(): void {
    this.get(this.route.snapshot.params["id"]);
  }

  submit(form: NgForm): void {
    this.registro.status = 'FINISHED';
    this.service.update(this.registro).subscribe({
      complete: () => {
        this.alertService.sendSuccessAlert();
      }
    });
  }

  get(id: number): void {
    this.service.getById(id).subscribe({
      next: (result: Campaign) => {
        this.registro = result;
      }
    });
  }
}
