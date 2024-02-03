import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollDetailsTableComponent } from './payroll-details-table.component';

describe('PayrollDetailsTableComponent', () => {
  let component: PayrollDetailsTableComponent;
  let fixture: ComponentFixture<PayrollDetailsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollDetailsTableComponent]
    });
    fixture = TestBed.createComponent(PayrollDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
