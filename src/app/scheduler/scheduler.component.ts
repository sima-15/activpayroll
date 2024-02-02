import { Component, OnInit } from '@angular/core';
import { sampleData, displayDate } from './events';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  public selectedDate: Date = displayDate;
    public events: SchedulerEvent[] = sampleData;
  constructor() { }

  ngOnInit(): void {
  }

}
