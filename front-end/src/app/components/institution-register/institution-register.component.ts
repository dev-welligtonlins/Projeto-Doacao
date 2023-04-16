import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { InstitutionService } from 'src/app/service/institution.service';
import { DonorService } from 'src/app/service/donor.service';
import { AlertService } from 'src/app/service/alert.service';
import { Institution } from 'src/app/model/institution';
import { Address } from 'src/app/model/address';
import { User } from 'src/app/model/user';
import ValidationPattern from 'src/app/utils/validation-pattern';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-institution-register',
  templateUrl: './institution-register.component.html',
  styleUrls: ['./institution-register.component.scss']
})
export class InstitutionRegisterComponent {

  files: any;

  controlForm: FormGroup | any;

  institution: Institution = <Institution>{
    address: <Address>{},
    user: <User>{}
  };

  constructor(
    private institutionService: InstitutionService,
    private donorService: DonorService,
    private alertService: AlertService,
    public formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
    this.controlForm = this.formBuilder.group({
      corporate_name: new FormControl(this.institution.corporate_name, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('corporate_name'))
      ]),
      fantasy_name: new FormControl(this.institution.fantasy_name, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('corporate_name'))
      ]),
      cnpj: new FormControl(this.institution.cnpj, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(ValidationPattern.getPattern('number'))
      ]),
      email: new FormControl(this.institution.email, [
        Validators.required,
        Validators.maxLength(60),
        Validators.email
      ]),
      phone: new FormControl(this.institution.phone, [
        Validators.required,
        Validators.maxLength(12),
        Validators.pattern(ValidationPattern.getPattern('number'))
      ]),
      linkMain: new FormControl(this.institution.linkMain, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('link'))
      ]),
      linkAlternate: new FormControl(this.institution.linkAlternate, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('link'))
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
        Validators.maxLength(255),
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
      ]),
      username: new FormControl(this.institution.user.username, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('username'))
      ]),
      password: new FormControl(this.institution.user.password, [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(ValidationPattern.getPattern('password'))
      ])
    });
  }

  submit(): void {
    this.institution.user.role = "ROLE_INSTITUTION";
    if(this.files) {
      this.institutionService.fileUpload(this.files).subscribe({
        complete: () => {
          //console.log("File to upload!")
          this.institutionService.insert(this.institution).subscribe({
            complete: () => {
              this.alertService.sendSuccessAlert();
              setTimeout(() => {
                this.router.navigate(['/login']);
              }, 500);
            }
          });
        }
      }); 
    } else {
      //alert("Você precisa enviar uma foto da instituição.");
      this.institutionService.insert(this.institution).subscribe({
        complete: () => {
          this.alertService.sendSuccessAlert();
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 500);
        }
      });
    }
  }

  onFileChange(event: any) {
    this.files = event.target.files;
    this.institution.cover_image = this.files[0].name;
  }

  full() {
    console.log("Autocompleted");
    this.institutionService.getGenerate().subscribe({
      next: (result: Institution) => {
        console.log(result);
        this.institution = result;
      }
    });
    /*this.institution.corporate_name = "Razão Social " + Math.floor(Date.now() / 1000).toString();
    this.institution.fantasy_name = "Nome Fantasia " + Math.floor(Date.now() / 1000).toString();
    this.institution.cnpj = "CNPJ " + Math.floor(Date.now() / 1000).toString();
    this.institution.resume = "Resumo " + Math.floor(Date.now() / 1000).toString();
    this.institution.description = "Descrição " + Math.floor(Date.now() / 1000).toString();
    this.institution.about = "Sobre " + Math.floor(Date.now() / 1000).toString();
    this.institution.mission = "Missão " + Math.floor(Date.now() / 1000).toString();
    this.institution.vision = "Visão " + Math.floor(Date.now() / 1000).toString();
    this.institution.value = "Valores " + Math.floor(Date.now() / 1000).toString();
    this.institution.opening_date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.institution.address.postalCode = Math.random().toString();
    this.institution.address.country = Math.random().toString();
    this.institution.address.state = Math.random().toString();
    this.institution.address.city = Math.random().toString();
    this.institution.address.district = Math.random().toString();
    this.institution.address.location = Math.random().toString();
    this.institution.address.number = Math.random().toString();
    this.institution.user.username = Math.random().toString();
    this.institution.user.password = Math.random().toString();*/
  }

  // onFileChange(event: any){
  //   this.files = event.target.files;
  //   console.log(this.files);
  //   this.institutionService.fileUpload(this.files).subscribe({
  //     complete: () => {
  //       console.log("File to upload!")
  //     }
  //   });
  // }

}
