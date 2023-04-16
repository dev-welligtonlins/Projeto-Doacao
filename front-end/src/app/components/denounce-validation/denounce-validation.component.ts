import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Denounce } from 'src/app/model/denounce';
import { AlertService } from 'src/app/service/alert.service';
import { DenounceService } from 'src/app/service/denounce.service';

@Component({
  selector: 'app-denounce-validation',
  templateUrl: './denounce-validation.component.html',
  styleUrls: ['./denounce-validation.component.scss']
})
export class DenounceValidationComponent {
  constructor(
    private route: ActivatedRoute,
    private service: DenounceService,
    private alertService: AlertService
  ) { }

  registro: Denounce = <Denounce>{};

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
      next: (result: Denounce) => {
        this.registro = result;
        console.log(this.registro);
      }
    });
  }

  submit(): void {
    this.registro.accept = true;
    console.log(this.registro);
    this.service.updateAccept(this.registro).subscribe({
      complete: () => {
        this.alertService.sendSuccessAlert();
      }
    });
  }

}
