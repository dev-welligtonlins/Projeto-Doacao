import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegisterFormComponent } from './page-register.component';

describe('PageRegisterFormComponent', () => {
  let component: PageRegisterFormComponent;
  let fixture: ComponentFixture<PageRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
