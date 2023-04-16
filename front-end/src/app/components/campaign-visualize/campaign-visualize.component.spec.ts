import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignVisualizeComponent } from './campaign-visualize.component';

describe('CampaignVisualizeComponent', () => {
  let component: CampaignVisualizeComponent;
  let fixture: ComponentFixture<CampaignVisualizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignVisualizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
