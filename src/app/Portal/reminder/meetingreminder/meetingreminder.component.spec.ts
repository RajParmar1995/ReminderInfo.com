import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingreminderComponent } from './meetingreminder.component';

describe('MeetingreminderComponent', () => {
  let component: MeetingreminderComponent;
  let fixture: ComponentFixture<MeetingreminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingreminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingreminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
