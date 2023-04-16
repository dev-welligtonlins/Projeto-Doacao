import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donor } from 'src/app/model/donor';
import { AlertService } from 'src/app/service/alert.service';
import { DonorService } from 'src/app/service/donor.service';

@Component({
  selector: 'app-donor-disable',
  templateUrl: './donor-disable.component.html',
  styleUrls: ['./donor-disable.component.scss']
})
export class DonorDisableComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private donorService: DonorService,
    private alertService: AlertService
  ) { }

  donor: Donor = <Donor>{};

  isChecked: Boolean = false;

  checkValue(event: any){
    if(event.target.checked) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

  ngOnInit(): void {
    this.get(this.route.snapshot.params["id"]);
  }

  get(id: number): void {
    this.donorService.getById(id).subscribe({
      next: (result: Donor) => {
        this.donor = result;
      }
    });
  }

  submit(): void {
    this.donor.active = false;
    this.donorService.update(this.donor).subscribe({
      complete: () => {
        this.alertService.sendSuccessAlert();
      }
    });
    // this.donorService.delete(this.donor.id).subscribe({
    //   complete: () => {
    //     this.alertService.sendSuccessAlert();
    //     setTimeout(() => {
    //       this.router.navigate(['/doadores']);
    //     }, 500);
    //   }
    // });
  }
}
