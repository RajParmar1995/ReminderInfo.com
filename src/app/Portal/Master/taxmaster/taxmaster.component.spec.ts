import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxmasterComponent } from './taxmaster.component';

describe('TaxmasterComponent', () => {
  let component: TaxmasterComponent;
  let fixture: ComponentFixture<TaxmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
