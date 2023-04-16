import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from 'src/app/model/campaign';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/service/alert.service';
import { CampaignService } from 'src/app/service/campaign.service';
import { LoginService } from 'src/app/service/login.service';
import {Item} from "../../model/item";
import {ProgressService} from "../../service/progress.service";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent implements OnInit {

  apiUrl: string = environment.API_URL;

  constructor(
    private route: ActivatedRoute,
    private service: CampaignService,
    private alertService: AlertService,
    private progressService: ProgressService,
    private servicoLogin: LoginService
  ) { }

  registros: Campaign[] = Array<Campaign>();
  pagination: any;
  fakeArray: any;
  page: String = '0';

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
    this.service.get(page).subscribe({
      next: (result: any) => {
        this.pagination = result;
        this.fakeArray = new Array(this.pagination.totalPages)
        this.registros = result.content;
      }
    });
  }

  showImage(): string {
    var array = ['carousel-3.jpg', 'carousel-4.jpg', 'carousel-5.jpg', 'bg7.jpg', 'bg8.jpg'];
    return array[Math.floor(Math.random() * array.length)];
  }

  calculateProgress(items: Item[]): number {
    return this.progressService.calculateProgress(items);
  }

  getUsuario(): User {
    return this.servicoLogin.getUsuario();
  }
  
  search(searchTitle: any): void {
    if (searchTitle.value) {
      this.service.search(searchTitle.value, this.page).subscribe({
        next: (result: any) => {
          this.pagination = result;
          this.fakeArray = new Array(this.pagination.totalPages)
          this.registros = result.content;
        }
      });
    }
  }
}
