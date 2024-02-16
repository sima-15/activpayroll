import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { PayrollPulseDialogboxComponent } from '../payroll-pulse-dialogbox/payroll-pulse-dialogbox.component';

@Component({
  selector: 'app-landing-inner-card',
  templateUrl: './landing-inner-card.component.html',
  styleUrls: ['./landing-inner-card.component.css']
})
export class LandingInnerCardComponent implements OnInit{
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
  fortnightlyPulseProgress;
  fortnightlyPulseValue = 5;
  fortnightlyPulseValueMax = 6;
  
  MonthlyPulseProgress;
  MonthlyPulseValue = 6;
  MonthlyPulseValueMax = 6;
  
  constructor(public dialog: MatDialog){}
  ngOnInit(): void {
    this.fortnightlyPulseProgress = this.fortnightlyPulseValue*100/this.fortnightlyPulseValueMax
    this.MonthlyPulseProgress = this.MonthlyPulseValue*100/this.MonthlyPulseValueMax
  }
  openDialog() {
    const dialogRef = this.dialog.open(PayrollPulseDialogboxComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
