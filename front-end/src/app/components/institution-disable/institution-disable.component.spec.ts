import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionDisableComponent } from './institution-disable.component';

describe('InstitutionDisableComponent', () => {
  let component: InstitutionDisableComponent;
  let fixture: ComponentFixture<InstitutionDisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionDisableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
