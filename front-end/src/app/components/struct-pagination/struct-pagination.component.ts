import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-struct-pagination',
  standalone: true,
	imports: [NgbPaginationModule],
  templateUrl: './struct-pagination.component.html',
  styleUrls: ['./struct-pagination.component.scss']
})
export class StructPaginationComponent {
  page = 1;
  

}

