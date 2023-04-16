import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DonorService } from 'src/app/service/donor.service';
import { AlertService } from 'src/app/service/alert.service';
import { Donor } from 'src/app/model/donor';
import { Address } from 'src/app/model/address';
import { User } from 'src/app/model/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidationPattern from 'src/app/utils/validation-pattern';

@Component({
  selector: 'app-donor-register',
  templateUrl: './donor-register.component.html',
  styleUrls: ['./donor-register.component.scss']
})
export class DonorRegisterComponent {

  controlForm: FormGroup | any;

  donor: Donor = <Donor>{
    address: <Address>{},
    user: <User>{},
    gender: "MASCULINO"
  };

  constructor(
    private donorService: DonorService,
    private alertService: AlertService,
    public formBuilder: FormBuilder,
    private router: Router) {
    this.controlForm = this.formBuilder.group({
      fullName: new FormControl(this.donor.fullName, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('name'))
      ]),
      cpf: new FormControl(this.donor.cpf, [
        Validators.required,
        Validators.minLength(11),
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
      ]),
      username: new FormControl(this.donor.user.username, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('username'))
      ]),
      password: new FormControl(this.donor.user.password, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('password'))
      ])
    });
  }

  submit(): void {
    console.log(this.donor);
    this.donor.user.role = "ROLE_DONOR";
    this.donorService.insert(this.donor).subscribe({
      complete: () => {
        this.alertService.sendSuccessAlert();
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 500);
      }
    });
  }

  full() {
    console.log("Autocompleted");
    this.donorService.getGenerate().subscribe({
      next: (result: Donor) => {
        console.log(result);
        this.donor = result;
      }
    });
  }

}
