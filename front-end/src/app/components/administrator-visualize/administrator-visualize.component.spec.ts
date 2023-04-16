import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorVisualizeComponent } from './administrator-visualize.component';

describe('AdministratorVisualizeComponent', () => {
  let component: AdministratorVisualizeComponent;
  let fixture: ComponentFixture<AdministratorVisualizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorVisualizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
