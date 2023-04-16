import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionVisualizeComponent } from './institution-visualize.component';

describe('InstitutionVisualizeComponent', () => {
  let component: InstitutionVisualizeComponent;
  let fixture: ComponentFixture<InstitutionVisualizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionVisualizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
