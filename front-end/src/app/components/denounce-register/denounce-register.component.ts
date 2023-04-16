import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign } from 'src/app/model/campaign';
import { Denounce } from 'src/app/model/denounce';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/service/alert.service';
import { DenounceService } from 'src/app/service/denounce.service';
import { LoginService } from 'src/app/service/login.service';
import ValidationPattern from 'src/app/utils/validation-pattern';



@Component({
  selector: 'app-denounce-register',
  templateUrl: './denounce-register.component.html',
  styleUrls: ['./denounce-register.component.scss']
})
export class DenounceRegisterComponent {

  controlForm: FormGroup | any;

  denounce: Denounce = <Denounce>{};


  constructor(
    private alertService: AlertService,
    private DenounceService: DenounceService,
    private loginService: LoginService,
    private router: Router,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute) {
    this.controlForm = this.formBuilder.group({
      title: new FormControl(this.denounce.title, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern("title"))
      ]),
      message: new FormControl(this.denounce.title, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern("text"))
      ])
    });
  }

  submit(): void {
    if (this.controlForm.valid) {
      // TODO: tem que pegar a data do servidor não do usuário
      this.denounce.date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
      this.denounce.campaign = <Campaign>{ id: this.route.snapshot.params["id"] };
      //this.denounce.user = <User>{};
      this.denounce.user = this.getUsuario();
      this.DenounceService.insert(this.denounce).subscribe({
        next: (denounce: Denounce) => {
          this.alertService.sendSuccessAlert();
          this.router.navigate(['/denuncias/visualizar/' + denounce.id]);
        }
      });
    } else {
      console.log("Invalid Form");
    }
  }

  getUsuario(): User {
    return this.loginService.getUsuario();
  }

}
