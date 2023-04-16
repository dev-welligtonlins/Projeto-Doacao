import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorDisableComponent } from './administrator-disable.component';

describe('AdministratorDisableComponent', () => {
  let component: AdministratorDisableComponent;
  let fixture: ComponentFixture<AdministratorDisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorDisableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
