import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollAuthFormComponent } from './payroll-auth-form.component';

describe('PayrollAuthFormComponent', () => {
  let component: PayrollAuthFormComponent;
  let fixture: ComponentFixture<PayrollAuthFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollAuthFormComponent]
    });
    fixture = TestBed.createComponent(PayrollAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
