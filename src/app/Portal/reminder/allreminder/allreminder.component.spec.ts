import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreminderComponent } from './allreminder.component';

describe('AllreminderComponent', () => {
  let component: AllreminderComponent;
  let fixture: ComponentFixture<AllreminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllreminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllreminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
