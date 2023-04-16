import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenounceListComponent } from './denounce-list.component';

describe('DenounceListComponent', () => {
  let component: DenounceListComponent;
  let fixture: ComponentFixture<DenounceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenounceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenounceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
