import { Component, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Institution } from 'src/app/model/institution';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/service/alert.service';
import { InstitutionService } from 'src/app/service/institution.service';
import { LoginService } from 'src/app/service/login.service';
import { environment } from 'src/environments/environment';



NgModule

@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.scss']
})
export class InstitutionListComponent {

  apiUrl: string = environment.API_URL;

  constructor(
    private route: ActivatedRoute,
    private service: InstitutionService,
    private alertService: AlertService,
    private servicoLogin: LoginService
  ) { }

  registros: Institution[] = Array<Institution>();
  pagination: any;
  fakeArray: any;
  

  ngOnInit(): void {
    let page: String = '';
    this.route.queryParams.forEach(param =>  { page = param['page'] });
    if (page){
      this.get(page);
    }
    else {
      this.get('0');
    }
    
  }

  get(page: String): void {
    console.log(page);
    this.service.get(page).subscribe({
      next: (result: any) => {
        this.pagination = result;
        
        console.log(this.pagination)
        this.fakeArray = new Array(this.pagination.totalPages)
        this.registros = result.content;
        console.log(this.fakeArray)
      }
    });
  }



  showImage(): string {
    var array = ['carousel-3.jpg', 'carousel-4.jpg', 'carousel-5.jpg', 'bg7.jpg', 'bg8.jpg'];
    return array[Math.floor(Math.random() * array.length)];
  }

  getUsuario(): User {
    return this.servicoLogin.getUsuario();
  }
}
