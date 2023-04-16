import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Donor } from 'src/app/model/donor';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/service/alert.service';
import { DonorService } from 'src/app/service/donor.service';
import ValidationPattern from 'src/app/utils/validation-pattern';

// TODO: analisar se isso vai bugar os enjoys e follows

@Component({
  selector: 'app-donor-update',
  templateUrl: './donor-update.component.html',
  styleUrls: ['./donor-update.component.scss']
})
export class DonorUpdateComponent {

  controlForm: FormGroup | any;

  donor: Donor = <Donor>{
    address: <Address>{},
    user: <User>{}
  };

  constructor(
    private donorService: DonorService,
    private alertService: AlertService,
    public formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
      this.controlForm = this.formBuilder.group({
        fullName: new FormControl(this.donor.fullName, [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(ValidationPattern.getPattern('name'))
        ]),
        cpf: new FormControl(this.donor.cpf, [
          Validators.required,
          Validators.maxLength(11),
          Validators.pattern(ValidationPattern.getPattern('number'))
        ]),
        email: new FormControl(this.donor.email, [
          Validators.required,
          Validators.maxLength(100),
          Validators.email
        ]),
        gender: new FormControl(this.donor.gender, [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(ValidationPattern.getPattern('name'))
        ]),
        birthDate: new FormControl(this.donor.birthDate, [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(ValidationPattern.getPattern('date'))
        ]),
        postalCode: new FormControl(this.donor.address.postalCode, [
          Validators.required,
          Validators.maxLength(8),
          Validators.pattern(ValidationPattern.getPattern('number'))
        ]),
        country: new FormControl(this.donor.address.country, [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(ValidationPattern.getPattern('text'))
        ]),
        state: new FormControl(this.donor.address.state, [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(ValidationPattern.getPattern('text'))
        ]),
        city: new FormControl(this.donor.address.city, [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(ValidationPattern.getPattern('text'))
        ]),
        district: new FormControl(this.donor.address.district, [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(ValidationPattern.getPattern('text'))
        ]),
        location: new FormControl(this.donor.address.location, [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(ValidationPattern.getPattern('text'))
        ]),
        number: new FormControl(this.donor.address.number, [
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
    this.donorService.getById(id).subscribe({
      next: (result: Donor) => {
        this.donor = result;
      }
    });
  }

  submit(): void {
    this.donorService.update(this.donor).subscribe({
      complete: () => {
        this.alertService.sendSuccessAlert();
        setTimeout(() => {
          this.router.navigate(['/conta']);
        }, 500);
      }
    });
  }
}
