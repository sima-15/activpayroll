import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css'],
})
export class PayrollComponent {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
  myButton() {
    console.log("my button was clicked!");
  }
}
