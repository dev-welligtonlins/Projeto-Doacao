import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionValidationComponent } from './institution-validation.component';

describe('InstitutionValidationComponent', () => {
  let component: InstitutionValidationComponent;
  let fixture: ComponentFixture<InstitutionValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
