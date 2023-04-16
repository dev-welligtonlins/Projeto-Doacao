import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenounceDisableComponent } from './denounce-disable.component';

describe('DenounceDisableComponent', () => {
  let component: DenounceDisableComponent;
  let fixture: ComponentFixture<DenounceDisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenounceDisableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenounceDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
