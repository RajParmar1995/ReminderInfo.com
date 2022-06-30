import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderinfodailogComponent } from './reminderinfodailog.component';

describe('ReminderinfodailogComponent', () => {
  let component: ReminderinfodailogComponent;
  let fixture: ComponentFixture<ReminderinfodailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderinfodailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderinfodailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
