import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    
    
    private alertService: AlertService,
   ) { }

  ngOnInit(): void {
      this.alertService.sendSuccessAlert();
  }

}
