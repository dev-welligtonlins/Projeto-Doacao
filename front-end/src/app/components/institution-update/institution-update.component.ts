import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Institution } from 'src/app/model/institution';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/service/alert.service';
import { InstitutionService } from 'src/app/service/institution.service';
import ValidationPattern from 'src/app/utils/validation-pattern';

@Component({
  selector: 'app-institution-update',
  templateUrl: './institution-update.component.html',
  styleUrls: ['./institution-update.component.scss']
})
export class InstitutionUpdateComponent implements OnInit {

  files: any;

  controlForm: FormGroup | any;

  institution: Institution = <Institution>{
    address: <Address>{},
    user: <User>{}
  };

  constructor(
    private institutionService: InstitutionService,
    private alertService: AlertService,
    public formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
    this.controlForm = this.formBuilder.group({
      corporate_name: new FormControl(this.institution.corporate_name, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('name'))
      ]),
      fantasy_name: new FormControl(this.institution.fantasy_name, [
        Validators.required,
        Validators.maxLength(11),
        Validators.pattern(ValidationPattern.getPattern('name'))
      ]),
      cnpj: new FormControl(this.institution.cnpj, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(ValidationPattern.getPattern('number'))
      ]),
      resume: new FormControl(this.institution.resume, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      about: new FormControl(this.institution.about, [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      mission: new FormControl(this.institution.mission, [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      vision: new FormControl(this.institution.vision, [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      value: new FormControl(this.institution.value, [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      description: new FormControl(this.institution.description, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      opening_date: new FormControl(this.institution.opening_date, [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern(ValidationPattern.getPattern('date'))
      ]),
      postalCode: new FormControl(this.institution.address.postalCode, [
        Validators.required,
        Validators.maxLength(8),
        Validators.pattern(ValidationPattern.getPattern('number'))
      ]),
      country: new FormControl(this.institution.address.country, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      state: new FormControl(this.institution.address.state, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      city: new FormControl(this.institution.address.city, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      district: new FormControl(this.institution.address.district, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      location: new FormControl(this.institution.address.location, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      number: new FormControl(this.institution.address.number, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ])
    });
  }

  ngOnInit(): void {
    this.get(this.route.snapshot.params["id"]);
  }

  get(id: number): void {
    this.institutionService.getById(id).subscribe({
      next: (result: Institution) => {
        this.institution = result;
      }
    });
  }

  submit(): void {
    console.log(this.files)
    if (this.files) {
      this.institutionService.fileUpload(this.files).subscribe({
        complete: () => {
          console.log("uploaded");
          //console.log("File to upload!")
          this.institutionService.update(this.institution).subscribe({
            complete: () => {
              this.alertService.sendSuccessAlert();
              setTimeout(() => {
                this.router.navigate(['/instituicoes/atualizar/' + this.institution.id]);
              }, 500);
            }
          });
        }
      });
    } else {
      this.institutionService.update(this.institution).subscribe({
        complete: () => {
          this.alertService.sendSuccessAlert();
          setTimeout(() => {
            this.router.navigate(['/instituicoes/atualizar/' + this.institution.id]);
          }, 500);
        }
      });
    }
  }

  onFileChange(event: any) {
    this.files = event.target.files;
    this.institution.cover_image = this.files[0].name;
  }

}
