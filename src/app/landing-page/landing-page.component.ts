import { Component } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  accordion!: MatAccordion;
  selectedOption: string = 'Most Relevant';
  myButton() {
    console.log("my button was clicked!");
  }
}
