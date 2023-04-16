import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Institution } from 'src/app/model/institution';
import { AlertService } from 'src/app/service/alert.service';
import { InstitutionService } from 'src/app/service/institution.service';

@Component({
  selector: 'app-institution-validation',
  templateUrl: './institution-validation.component.html',
  styleUrls: ['./institution-validation.component.scss']
})
export class InstitutionValidationComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: InstitutionService,
    private alertService: AlertService
  ) { }

  registro: Institution = <Institution>{};

  isChecked: Array<any> = [];

  checkValue(event: any){
    if(event.target.checked) {
      this.isChecked.push(true);
    } else {
      this.isChecked.pop();
    }
  }

  ngOnInit(): void {
    this.get(this.route.snapshot.params["id"]);
  }

  get(id: number): void {
    this.service.getById(id).subscribe({
      next: (result: Institution) => {
        this.registro = result;
        console.log(this.registro);
      }
    });
  }

  submit(): void {

    this.registro.pending = true;
    this.service.updateValidation(this.registro).subscribe({
      complete: () => {

        this.alertService.sendSuccessAlert();
        setTimeout(() => {
          this.router.navigate(['/instituicoes']);
        }, 500);
      }
    });
    //this.item = Array<Item>();
  }

  showImage(): string {
    var array = ['carousel-3.jpg', 'carousel-4.jpg', 'carousel-5.jpg', 'bg7.jpg', 'bg8.jpg'];
    return array[Math.floor(Math.random() * array.length)];
  }
}
