import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenounceRegisterComponent } from './denounce-register.component';

describe('DenounceRegisterComponent', () => {
  let component: DenounceRegisterComponent;
  let fixture: ComponentFixture<DenounceRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenounceRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenounceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
