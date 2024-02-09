import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollPulseDialogboxComponent } from './payroll-pulse-dialogbox.component';

describe('PayrollPulseDialogboxComponent', () => {
  let component: PayrollPulseDialogboxComponent;
  let fixture: ComponentFixture<PayrollPulseDialogboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollPulseDialogboxComponent]
    });
    fixture = TestBed.createComponent(PayrollPulseDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
