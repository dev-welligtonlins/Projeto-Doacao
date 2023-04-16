import { Component } from '@angular/core';
import { Campaign } from 'src/app/model/campaign';
import { Item } from 'src/app/model/item';
import { AlertService } from 'src/app/service/alert.service';
import { CampaignService } from 'src/app/service/campaign.service';
import { ProgressService } from 'src/app/service/progress.service';
import AOS from 'aos';
import { LoginService } from 'src/app/service/login.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent {

  apiUrl: string = environment.API_URL;

  constructor(
    private service: CampaignService,
    private loginService: LoginService,
    private alertService: AlertService,
    private progressService: ProgressService
  ) { }

  campaigns: Campaign[] = Array<Campaign>();

  ngOnInit(): void {
    AOS.init();
    this.get();
  }

  get(): void {
    this.service.get('0').subscribe({
      next: (result: any) => {
        this.campaigns = result.content;
      }
    });
  }

  calculateProgress(items: Item[]): number {
    return this.progressService.calculateProgress(items);
  }

  isAuthenticated(): boolean {
    return this.loginService.isAutenticado();
  }
}

// const heart = document.querySelector(".heart");
// const animationHeart = document.querySelector(".animation-heart");

// heart.addEventListener('click', () =>{
//   animationHeart.classList.add('animation');
//   heart.classList.add('fill-color');
// })

// animationHeart.addEventListener('click', () => {
//   animationHeart.classList.remove('fill-color');
// });
