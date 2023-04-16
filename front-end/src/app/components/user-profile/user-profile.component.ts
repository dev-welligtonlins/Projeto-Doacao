import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Administrator } from 'src/app/model/administrator';
import { Campaign } from 'src/app/model/campaign';
import { Denounce } from 'src/app/model/denounce';
import { Donor } from 'src/app/model/donor';
import { Enjoy } from 'src/app/model/enjoy';
import { Institution } from 'src/app/model/institution';
import { User } from 'src/app/model/user';
import { AdministratorService } from 'src/app/service/administrator.service';
import { AlertService } from 'src/app/service/alert.service';
import { DonorService } from 'src/app/service/donor.service';
import { InstitutionService } from 'src/app/service/institution.service';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  apiUrl: string = environment.API_URL;

  constructor(
    private administratorService: AdministratorService,
    private InstitutionService: InstitutionService,
    private donorService: DonorService,
    private userService: UserService,
    private servicoLogin: LoginService
  ) { }

  user: User = <User>{};

  administrator: Administrator = <Administrator>{
    address: <Address>{},
    user: <User>{}
  };

  institution: Institution = <Institution>{
    address: <Address>{},
    user: <User>{}
  };

  donor: Donor = <Donor>{
    address: <Address>{},
    user: <User>{}
  };

  userInstitutionFollows: Institution[] = Array<Institution>();
  userInstitutionTrusts: Institution[] = Array<Institution>();
  userCampaignEnjoys: Campaign[] = Array<Campaign>();
  userDenounces: Denounce[] = Array<Denounce>();

  ngOnInit(): void {
    this.user = this.getUsuario();
    this.get(this.user.id);

    this.userService.getUserFollowsById(this.user.id).subscribe({
      next: (result: Institution[]) => {
        this.userInstitutionFollows = result;
      }
    });

    this.userService.getUserEnjoysById(this.user.id).subscribe({
      next: (result: Campaign[]) => {
        this.userCampaignEnjoys = result;
      }
    });

    this.userService.getUserTrustsById(this.user.id).subscribe({
      next: (result: Institution[]) => {
        this.userInstitutionTrusts = result;
      }
    });

    this.userService.getUserDenouncesById(this.user.id).subscribe({
      next: (result: Denounce[]) => {
        this.userDenounces = result;
      }
    });

    if (this.user.role == "ROLE_ADMIN") {
      this.administratorService.getByUserId(this.user.id).subscribe({
        next: (result: Administrator) => {
          this.administrator = result;
          console.log(result)
        }
      });
    }
    if (this.user.role == "ROLE_INSTITUTION") {
      this.InstitutionService.getByUserId(this.user.id).subscribe({
        next: (result: Institution) => {
          this.institution = result;
          console.log(result)
        }
      });
    }
    if (this.user.role == "ROLE_DONOR") {
      this.donorService.getByUserId(this.user.id).subscribe({
        next: (result: Donor) => {
          this.donor = result;
          console.log(result)
        }
      });
    }
  }

  get(id: number): void {
    this.userService.getById(id).subscribe({
      next: (result: User) => {
        this.user = result;
      }
    });
  }

  getUsuario(): User {
    return this.servicoLogin.getUsuario();
  }

}
