import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from 'src/app/model/campaign';
import { Item } from 'src/app/model/item';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/service/alert.service';
import { CampaignService } from 'src/app/service/campaign.service';
import { LoginService } from 'src/app/service/login.service';
import { ProgressService } from 'src/app/service/progress.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-campaign-my',
  templateUrl: './campaign-my.component.html',
  styleUrls: ['./campaign-my.component.scss']
})
export class CampaignMyComponent {
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

  institutionId: any;

  ngOnInit(): void {
    this.institutionId = this.route.snapshot.params["id"];
    let page: String = '';
    this.route.queryParams.forEach(param =>  { page = param['page'] });
    if (page){
      this.get(this.route.snapshot.params["id"], page);
    }
    else {
      this.get(this.route.snapshot.params["id"], '0');
    }
  }

  get(id: number, page: String): void {
    this.service.getByInstitutionId(id, page).subscribe({
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
}
