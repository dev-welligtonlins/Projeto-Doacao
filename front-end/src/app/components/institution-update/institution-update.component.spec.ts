import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionUpdateComponent } from './institution-update.component';

describe('InstitutionUpdateComponent', () => {
  let component: InstitutionUpdateComponent;
  let fixture: ComponentFixture<InstitutionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
