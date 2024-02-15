import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  selectedOption: string = 'Most Relevant';
  options = ["Australia", "Canada", "China", "France", "Germany"];
  selected = [];
}
