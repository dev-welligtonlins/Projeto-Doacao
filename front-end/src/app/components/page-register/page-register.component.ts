import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Institution } from 'src/app/model/institution';
import { InstitutionService } from 'src/app/service/institution.service';
import { Donor } from 'src/app/model/donor';
import { DonorService } from 'src/app/service/donor.service';
import { AlertService } from 'src/app/service/alert.service';

// TODO: [dúvida] perguntar ao professor como fica a tipagem e a implementação da interface CRUD nesse caso?
@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.scss']
})
export class PageRegisterFormComponent {
  constructor(
    private institutionService: InstitutionService,
    private donorService: DonorService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute) { }

    institution: Institution = <Institution>{};
    donor: Donor = <Donor>{};

    submit(form: NgForm): void {
      /*let radio = document.querySelector<HTMLInputElement>('input[name="flexRadioDefault"]:checked')?.value;
      if(radio == 'juridical') {
        this.institutionService.insert(this.institution).subscribe({
          complete: () => {
            form.resetForm();
            this.alertService.sendSuccessAlert();
          }
        });
      } else {
        this.donorService.insert(this.donor).subscribe({
          complete: () => {
            form.resetForm();
            this.alertService.sendSuccessAlert();
          }
        });
      }*/
    }

    pessoa(event: any) {
      let tipo = event.target.value;
      const formLegalPerson = document.getElementById('fisica');
      const formJuridicalPerson = document.getElementById('juridica');
      if (tipo == "legal") {
        if (formLegalPerson) {
          formLegalPerson.style.display = "inline";
        }
        if (formJuridicalPerson) {
          formJuridicalPerson.style.display = "none";
        }
      } else if (tipo == "juridical") {
        if (formLegalPerson) {
          formLegalPerson.style.display = "none";
        }
        if (formJuridicalPerson) {
          formJuridicalPerson.style.display = "inline";
        }
      }
    }
}
