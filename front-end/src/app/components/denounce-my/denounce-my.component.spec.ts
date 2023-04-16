import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenounceMyComponent } from './denounce-my.component';

describe('DenounceMyComponent', () => {
  let component: DenounceMyComponent;
  let fixture: ComponentFixture<DenounceMyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenounceMyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenounceMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
