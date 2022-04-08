import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycmasterComponent } from './kycmaster.component';

describe('KycmasterComponent', () => {
  let component: KycmasterComponent;
  let fixture: ComponentFixture<KycmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
