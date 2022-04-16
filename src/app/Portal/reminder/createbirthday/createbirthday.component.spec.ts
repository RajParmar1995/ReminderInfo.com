import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebirthdayComponent } from './createbirthday.component';

describe('CreatebirthdayComponent', () => {
  let component: CreatebirthdayComponent;
  let fixture: ComponentFixture<CreatebirthdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatebirthdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
