import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  selectedOption: string = 'Most Relevant';
  // options = ["Australia", "Canada", "China", "France", "Germany"];
  selected = [];
  options = [
    {
      name: "Australia",
      icon: '../../../assets/image/GB.png'
    },
    {
      name: "Canada",
      icon: '../../../assets/image/GB.png'
    },
    {
      name: "China",
      icon: '../../../assets/image/GB.png'
    },
    {
      name: "France",
      icon: '../../../assets/image/GB.png'
    },
    {
      name: "Germany",
      icon: '../../../assets/image/GB.png'
    }];
}
