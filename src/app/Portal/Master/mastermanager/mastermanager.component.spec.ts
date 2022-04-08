import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastermanagerComponent } from './mastermanager.component';

describe('MastermanagerComponent', () => {
  let component: MastermanagerComponent;
  let fixture: ComponentFixture<MastermanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastermanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastermanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
