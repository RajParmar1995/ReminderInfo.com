import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusmasterComponent } from './statusmaster.component';

describe('StatusmasterComponent', () => {
  let component: StatusmasterComponent;
  let fixture: ComponentFixture<StatusmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
