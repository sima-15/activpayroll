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

    public group: any = {
      resources: ['Rooms', 'Attendees'],
      orientation: 'vertical'
  };

  public resources: any[] = [{
      name: 'Rooms',
      data: [
          { text: 'Canada Weekly Payroll', value: 1, color: '#2572c0' },
          { text: 'Canada Monthly Payroll', value: 2, color: '#f58a8a' },
          { text: 'Canada Fortnightly Payroll', value: 3, color: '#f58a8a' }
      ],
      field: 'roomId',
       valueField: 'value',
       textField: 'text',
      // colorField: 'pink',
      // multiple: true
  }, {
            field: "attendees",
            name: 'Attendees',
            data: [
                { text: "Production Staff", value: 1 },
                // { text: "Bob", value: 2 },
                // { text: "Charlie", value: 3 }
            ],
            //multiple: true,
            //title: "Attendees",
            valueField: 'value',
       textField: 'text',
        
}
];

  constructor() { }

  ngOnInit(): void {
  }

}
