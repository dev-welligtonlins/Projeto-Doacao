import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Administrator } from 'src/app/model/administrator';
import { User } from 'src/app/model/user';
import { AdministratorService } from 'src/app/service/administrator.service';
import { AlertService } from 'src/app/service/alert.service';
import ValidationPattern from 'src/app/utils/validation-pattern';

@Component({
  selector: 'app-administrator-register',
  templateUrl: './administrator-register.component.html',
  styleUrls: ['./administrator-register.component.scss']
})
export class AdministratorRegisterComponent {

  controlForm: FormGroup | any;

  administrator: Administrator = <Administrator>{
    address: <Address>{},
    user: <User>{}
  };

  constructor(
    private servico: AdministratorService,
    private router: Router,
    public formBuilder: FormBuilder,
    private alertService: AlertService) {
    this.controlForm = this.formBuilder.group({
      fullName: new FormControl(this.administrator.fullName, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('name'))
      ]),
      email: new FormControl(this.administrator.email, [
        Validators.required,
        Validators.maxLength(100),
        Validators.email
      ]),
      postalCode: new FormControl(this.administrator.address.postalCode, [
        Validators.required,
        Validators.maxLength(8),
        Validators.pattern(ValidationPattern.getPattern('number'))
      ]),
      country: new FormControl(this.administrator.address.country, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      state: new FormControl(this.administrator.address.state, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      city: new FormControl(this.administrator.address.city, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      district: new FormControl(this.administrator.address.district, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      location: new FormControl(this.administrator.address.location, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      number: new FormControl(this.administrator.address.number, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('text'))
      ]),
      username: new FormControl(this.administrator.user.username, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('username'))
      ]),
      password: new FormControl(this.administrator.user.password, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('password'))
      ])
    });
  }

  submit(): void {
    this.servico.insert(this.administrator).subscribe({
      complete: () => {
        this.alertService.sendSuccessAlert();
        setTimeout(() => {
          this.router.navigate(['/administradores']);
        }, 500);
      }
    });
  }
}
