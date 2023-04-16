import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorUpdateComponent } from './administrator-update.component';

describe('AdministratorUpdateComponent', () => {
  let component: AdministratorUpdateComponent;
  let fixture: ComponentFixture<AdministratorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
