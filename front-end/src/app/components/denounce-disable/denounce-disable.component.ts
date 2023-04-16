import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Denounce } from 'src/app/model/denounce';
import { AlertService } from 'src/app/service/alert.service';
import { DenounceService } from 'src/app/service/denounce.service';

@Component({
  selector: 'app-denounce-disable',
  templateUrl: './denounce-disable.component.html',
  styleUrls: ['./denounce-disable.component.scss']
})
export class DenounceDisableComponent {
  constructor(
    private route: ActivatedRoute,
    private denounceService: DenounceService,
    private alertService: AlertService
  ) { }

  denounce: Denounce = <Denounce>{};

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
    this.denounceService.getById(id).subscribe({
      next: (result: Denounce) => {
        this.denounce = result;
      }
    });
  }

  submit(): void {
    this.denounceService.delete(this.denounce.id).subscribe({
      complete: () => {
        this.alertService.sendSuccessAlert();
      }
    });
  }
}
