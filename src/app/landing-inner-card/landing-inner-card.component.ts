import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { PayrollPulseDialogboxComponent } from '../payroll-pulse-dialogbox/payroll-pulse-dialogbox.component';

@Component({
  selector: 'app-landing-inner-card',
  templateUrl: './landing-inner-card.component.html',
  styleUrls: ['./landing-inner-card.component.css']
})
export class LandingInnerCardComponent {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
  constructor(public dialog: MatDialog){}

  openDialog() {
    const dialogRef = this.dialog.open(PayrollPulseDialogboxComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
