import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereminderComponent } from './createreminder.component';

describe('CreatereminderComponent', () => {
  let component: CreatereminderComponent;
  let fixture: ComponentFixture<CreatereminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatereminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatereminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
