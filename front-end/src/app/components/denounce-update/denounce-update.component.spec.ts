import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenounceUpdateComponent } from './denounce-update.component';

describe('DenounceUpdateComponent', () => {
  let component: DenounceUpdateComponent;
  let fixture: ComponentFixture<DenounceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenounceUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenounceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
