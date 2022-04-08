import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainmasterComponent } from './complainmaster.component';

describe('ComplainmasterComponent', () => {
  let component: ComplainmasterComponent;
  let fixture: ComponentFixture<ComplainmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
