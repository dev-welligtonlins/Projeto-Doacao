import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Institution } from 'src/app/model/institution';
import { AlertService } from 'src/app/service/alert.service';
import { InstitutionService } from 'src/app/service/institution.service';

@Component({
  selector: 'app-institution-disable',
  templateUrl: './institution-disable.component.html',
  styleUrls: ['./institution-disable.component.scss']
})
export class InstitutionDisableComponent {
  constructor(
    private route: ActivatedRoute,
    private institutionService: InstitutionService,
    private alertService: AlertService
  ) { }

  registro: Institution = <Institution>{};

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
    this.institutionService.getById(id).subscribe({
      next: (result: Institution) => {
        this.registro = result;
        console.log(this.registro);
      }
    });
  }

  submit(): void {
    this.registro.active = false;
    this.institutionService.update(this.registro).subscribe({
      complete: () => {
        this.alertService.sendSuccessAlert();
      }
    });
  }
}
