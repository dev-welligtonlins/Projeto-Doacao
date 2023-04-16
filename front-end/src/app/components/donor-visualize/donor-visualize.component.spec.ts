import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorVisualizeComponent } from './donor-visualize.component';

describe('DonorVisualizeComponent', () => {
  let component: DonorVisualizeComponent;
  let fixture: ComponentFixture<DonorVisualizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorVisualizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
