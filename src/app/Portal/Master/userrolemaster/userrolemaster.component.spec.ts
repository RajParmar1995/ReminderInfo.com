import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrolemasterComponent } from './userrolemaster.component';

describe('UserrolemasterComponent', () => {
  let component: UserrolemasterComponent;
  let fixture: ComponentFixture<UserrolemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserrolemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrolemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
