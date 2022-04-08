import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionmasterComponent } from './subscriptionmaster.component';

describe('SubscriptionmasterComponent', () => {
  let component: SubscriptionmasterComponent;
  let fixture: ComponentFixture<SubscriptionmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
