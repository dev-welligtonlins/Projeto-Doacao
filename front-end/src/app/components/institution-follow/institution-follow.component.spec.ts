import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionFollowComponent } from './institution-follow.component';

describe('InstitutionFollowComponent', () => {
  let component: InstitutionFollowComponent;
  let fixture: ComponentFixture<InstitutionFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionFollowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
