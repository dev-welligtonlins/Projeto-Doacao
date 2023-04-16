import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDisableComponent } from './campaign-disable.component';

describe('CampaignDisableComponent', () => {
  let component: CampaignDisableComponent;
  let fixture: ComponentFixture<CampaignDisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignDisableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
