import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignRegisterComponent } from './campaign-register.component';

describe('CampaignRegisterComponent', () => {
  let component: CampaignRegisterComponent;
  let fixture: ComponentFixture<CampaignRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
