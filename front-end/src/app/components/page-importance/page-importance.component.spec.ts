import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImportanceComponent } from './page-importance.component';

describe('PageImportanceComponent', () => {
  let component: PageImportanceComponent;
  let fixture: ComponentFixture<PageImportanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageImportanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageImportanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


