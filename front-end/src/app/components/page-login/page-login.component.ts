import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../service/login.service";
import { User } from "../../model/user";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validationPattern from 'src/app/utils/validation-pattern';
import ValidationPattern from 'src/app/utils/validation-pattern';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  user: User = <User>{};

  controlForm: FormGroup | any;

  constructor(
    private service: LoginService,
    public formBuilder: FormBuilder
  ) {
    this.controlForm = this.formBuilder.group({
      username: new FormControl(this.user.username, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('username'))
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('password'))
      ])
    });
  }
  ngOnInit(): void {
    //this.user.username = "admin";
    //this.user.password = "admin";
  }

  submit(): void {
    this.service.login(this.user);
  }

}
