import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payroll-pulse-dialogbox',
  templateUrl: './payroll-pulse-dialogbox.component.html',
  styleUrls: ['./payroll-pulse-dialogbox.component.css']
})
export class PayrollPulseDialogboxComponent {
  myForm!: FormGroup;
  isBtnSubmit: boolean = true;
  onValChange(event: any){
    this.isBtnSubmit = false
  }
  submit(){}
}
