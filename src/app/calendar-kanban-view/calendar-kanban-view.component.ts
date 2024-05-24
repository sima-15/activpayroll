import { Component, ViewEncapsulation } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { Internationalization } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-calendar-kanban-view',
  templateUrl: './calendar-kanban-view.component.html',
  styleUrls: ['./calendar-kanban-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarKanbanViewComponent {
  public selectedDate: Date = new Date(2024, 4, 28);
    public showWeekend: Boolean = true;
    public isReadOnly: number = 3;
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
    public minDate = new Date(2024, 2, 29);
    public maxDate = new Date(2024, 4, 28);

    public instance: Internationalization = new Internationalization();
    public displayDate: Date = new Date(2024, 3, 28);
    // getDateHeaderText: Function = (value: Date) => {
    //   return this.instance.formatDate(value, { skeleton: "E" + 'd' });
    // };
    getDateHeaderDay = function (value) {
      return this.instance.formatDate(value, { skeleton: 'E' });
  };
    getDateHeaderDate = function (value) {
      return this.instance.formatDate(value, { skeleton: 'd' });
  };
  getDateHeaderMonth = function (value) {
    return this.instance.formatDate(value, { skeleton: 'MMM' });
  };

}

  export let fifaEventsData: Object[] = [
    {
        Id: 1,
        Subject: 'RUSSIA vs SAUDI ARABIA',
        Description: 'Group A',
        StartTime: new Date(2024, 4, 11, 9, 30),
        EndTime: new Date(2024, 4, 11, 11, 0),
        StartTimezone: 'Europe/Moscow',
        EndTimezone: 'Europe/Moscow',
        City: 'Moscow',
        CategoryColor: '#1aaa55',
        GroupId: 1
    }, {
        Id: 2,
        Subject: 'EGYPT vs URUGUAY',
        Description: 'Group A',
        StartTime: new Date(2024, 5, 15, 12, 0),
        EndTime: new Date(2024, 5, 15, 14, 0),
        StartTimezone: 'Asia/Yekaterinburg',
        EndTimezone: 'Asia/Yekaterinburg',
        City: 'Ekaterinburg',
        CategoryColor: '#1aaa55',
        GroupId: 1
    }, {
        Id: 3,
        Subject: 'MOROCCO vs IR IRAN',
        Description: 'Group B',
        StartTime: new Date(2024, 5, 15, 15, 0),
        EndTime: new Date(2024, 5, 15, 17, 0),
        StartTimezone: 'Europe/Moscow',
        EndTimezone: 'Europe/Moscow',
        City: 'Saint Petersburg',
        CategoryColor: '#357cd2',
        GroupId: 2
    }, {
        Id: 4,
        Subject: 'PORTUGAL vs SPAIN',
        Description: 'Group B',
        StartTime: new Date(2024, 5, 15, 18, 0),
        EndTime: new Date(2024, 5, 15, 20, 0),
        StartTimezone: 'Europe/Moscow',
        EndTimezone: 'Europe/Moscow',
        City: 'Sochi',
        CategoryColor: '#357cd2',
        GroupId: 2
    },
];

export let scheduleData: Object[] = [
    {
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2024, 4, 11, 9, 30),
        EndTime: new Date(2024, 4, 11, 11, 0),
        CategoryColor: '#29a642'
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2024, 4, 12, 12, 0),
        EndTime: new Date(2024, 4, 12, 14, 0),
        CategoryColor: '#357cd2'
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2024, 4, 12, 9, 30),
        EndTime: new Date(2024, 4, 12, 11, 0),
        CategoryColor: '#7fa900'
    }, {
        Id: 4,
        Subject: 'Meteor Showers in 2024',
        StartTime: new Date(2024, 4, 14, 13, 0),
        EndTime: new Date(2024, 4, 14, 14, 30),
        CategoryColor: '#ea7a57'
    }, {
        Id: 5,
        Subject: 'Milky Way as Melting pot',
        StartTime: new Date(2024, 4, 28, 12, 0),
        EndTime: new Date(2024, 4, 28, 14, 0),
        CategoryColor: '#00bdae'
    },
];

export let timeZoneData: Object[] = [
    {
        Id: 1,
        Subject: "Explosion of Betelgeuse Star",
        StartTime: "2024-03-11T14:00:00.000Z",
        EndTime: "2024-03-11T15:30:00.000Z",
        CategoryColor: "#29a642"
    }, {
        Id: 2,
        Subject: "Thule Air Crash Report",
        StartTime: "2024-03-12T16:30:00.000Z",
        EndTime: "2024-03-12T18:30:00.000Z",
        CategoryColor: "#357cd2"
    }, {
        Id: 3,
        Subject: "Blue Moon Eclipse",
        StartTime: "2024-03-13T14:00:00.000Z",
        EndTime: "2024-03-13T15:30:00.000Z",
        CategoryColor: "#7fa900"
    }, 
];

export let resourceData: Object[] = [
    {
        Id: 1,
        Subject: 'Workflow Analysis',
        StartTime: new Date(2024, 4, 11, 9, 30),
        EndTime: new Date(2024, 4, 11, 11, 0),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 2,
        Subject: 'Requirement planning',
        StartTime: new Date(2024, 4, 1, 12, 30),
        EndTime: new Date(2024, 4, 1, 14, 45),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 3,
        Subject: 'Quality Analysis',
        StartTime: new Date(2024, 4, 2, 10, 0),
        EndTime: new Date(2024, 4, 2, 12, 30),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    },
];

export let schedulerData: Object[] = [
    {
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2024, 4, 11, 9, 30),
        EndTime: new Date(2024, 4, 11, 11, 0),
        CategoryColor: '#29a642'
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2021, 7, 12, 12, 0),
        EndTime: new Date(2021, 7, 12, 14, 0),
        CategoryColor: '#357cd2'
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2021, 7, 13, 9, 30),
        EndTime: new Date(2021, 7, 13, 11, 0),
        CategoryColor: '#7fa900'
    }
];


export function generateObject() {
  var data = [];
  for (var a = 0; a < 25; a++) {
    data.push({
      Id: a + 1,
      Subject: 'Testing',
      StartTime: new Date(2024, 4, 28),
      EndTime: new Date(2024, 4, 29),
      IsAllDay: true
    });
  }
  return data;
}
