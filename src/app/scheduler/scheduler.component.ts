import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
 import { sampleData, displayDate, sampleDataWithCustomSchema } from './events';
//import { sampleData, displayDate, sampleDataWithCustomSchema } from './events-uts';
import { EventStyleArgs, SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { SchedulerModelFields } from '@progress/kendo-angular-scheduler';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SchedulerComponent implements OnInit {
  public selectedDate: Date = displayDate;
    public events: SchedulerEvent[] = sampleData;
   //public events: any[] = sampleDataWithCustomSchema;
    public eventFields: SchedulerModelFields = {
        id: 'TaskID',
        title: 'Title',
        description: 'Description',
        startTimezone: 'StartTimezone',
        start: 'Start',
        end: 'End',
        endTimezone: 'EndTimezone',
        isAllDay: 'IsAllDay',
        recurrenceRule: 'RecurrenceRule',
        recurrenceId: 'RecurrenceID',
        recurrenceExceptions: 'RecurrenceException'
    };


    public group: any = {
      resources: ['Rooms', 'Attendees'],
      orientation: 'vertical'
  };

  public resources: any[] = [{
      name: 'Rooms',
      data: [
          { text: 'Canada Weekly Payroll', value: 1, color: '#2572c0' },
          { text: 'Canada Monthly Payroll', value: 2, color: '#f58a8a' },
          { text: 'Canada Fortnightly Payroll', value: 3, color: '#f58a8a' },
          { text: 'Australia Weekly Payroll', value: 4, color: '#2572c0' },
          { text: 'Australia Monthly Payroll', value: 5, color: '#f58a8a' },
          { text: 'Australia Fortnightly Payroll', value: 6, color: '#f58a8a' }
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
            ],
            //multiple: true,
            //title: "Attendees",
            valueField: 'value',
       textField: 'text',
        
}
];


  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    const currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');

    const todayColumn = this.el.nativeElement.querySelector(`.k-scheduler-day[data-date='${currentDate}']`);

    if(todayColumn) {
    this.renderer.addClass(todayColumn, 'today');
    }
  }

  public getEventClass = (args: EventStyleArgs) => {
    const eventId = args.event.dataItem.id;
    return eventId % 2 === 0 ? 'even-id' : 'odd-id';
  };

}
