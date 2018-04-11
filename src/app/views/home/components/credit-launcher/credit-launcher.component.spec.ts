import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditLauncherComponent } from './credit-launcher.component';

describe('CreditLauncherComponent', () => {
  let component: CreditLauncherComponent;
  let fixture: ComponentFixture<CreditLauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditLauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
