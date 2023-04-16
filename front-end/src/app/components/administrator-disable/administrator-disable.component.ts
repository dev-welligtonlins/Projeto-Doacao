import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Administrator } from 'src/app/model/administrator';
import { AdministratorService } from 'src/app/service/administrator.service';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-administrator-disable',
  templateUrl: './administrator-disable.component.html',
  styleUrls: ['./administrator-disable.component.scss']
})
export class AdministratorDisableComponent {
  constructor(
    private route: ActivatedRoute,
    private administratorService: AdministratorService,
    private alertService: AlertService
  ) { }

  administrator: Administrator = <Administrator>{};

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
    this.administratorService.getById(id).subscribe({
      next: (result: Administrator) => {
        this.administrator = result;
      }
    });
  }

  submit(): void {
    this.administrator.active = false;
    this.administratorService.update(this.administrator).subscribe({
      complete: () => {
        this.alertService.sendSuccessAlert();
      }
    });
    /*console.log(this.administrator.id)
    this.administratorService.delete(this.administrator.id).subscribe({
      complete: () => {
        this.alertService.sendSuccessAlert();
      }
    });*/
  }
}
