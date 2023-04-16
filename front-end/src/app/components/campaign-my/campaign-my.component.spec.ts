import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignMyComponent } from './campaign-my.component';

describe('CampaignMyComponent', () => {
  let component: CampaignMyComponent;
  let fixture: ComponentFixture<CampaignMyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignMyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
