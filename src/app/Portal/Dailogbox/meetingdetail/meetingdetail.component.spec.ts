import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingdetailComponent } from './meetingdetail.component';

describe('MeetingdetailComponent', () => {
  let component: MeetingdetailComponent;
  let fixture: ComponentFixture<MeetingdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
