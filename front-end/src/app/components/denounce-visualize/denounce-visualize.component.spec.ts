import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenounceVisualizeComponent } from './denounce-visualize.component';

describe('DenounceVisualizeComponent', () => {
  let component: DenounceVisualizeComponent;
  let fixture: ComponentFixture<DenounceVisualizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenounceVisualizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenounceVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
