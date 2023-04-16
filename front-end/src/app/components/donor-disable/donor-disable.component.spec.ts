import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorDisableComponent } from './donor-disable.component';

describe('DonorDisableComponent', () => {
  let component: DonorDisableComponent;
  let fixture: ComponentFixture<DonorDisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorDisableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
