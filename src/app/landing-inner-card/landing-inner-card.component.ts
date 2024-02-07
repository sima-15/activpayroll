import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

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
}
