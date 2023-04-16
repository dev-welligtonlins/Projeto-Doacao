import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenounceValidationComponent } from './denounce-validation.component';

describe('DenounceValidationComponent', () => {
  let component: DenounceValidationComponent;
  let fixture: ComponentFixture<DenounceValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenounceValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenounceValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
