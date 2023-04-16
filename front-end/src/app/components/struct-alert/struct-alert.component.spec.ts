import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructAlertComponent } from './struct-alert.component';

describe('StructAlertComponent', () => {
  let component: StructAlertComponent;
  let fixture: ComponentFixture<StructAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
