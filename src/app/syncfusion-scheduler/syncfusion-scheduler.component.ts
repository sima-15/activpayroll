import { Component, ViewEncapsulation } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import {
    TimelineViewsService, AgendaService, GroupModel, EventSettingsModel, ResizeService, DragAndDropService,
    ResourceDetails, TreeViewArgs, TimeScaleModel, EventRenderedArgs
} from '@syncfusion/ej2-angular-schedule';
import { timelineResourceData, resourceData } from './datasource';

@Component({
  selector: 'app-syncfusion-scheduler',
  templateUrl: './syncfusion-scheduler.component.html',
  styleUrls: ['./syncfusion-scheduler.component.css'], encapsulation: ViewEncapsulation.None,
  providers: [TimelineViewsService, AgendaService, ResizeService, DragAndDropService]
})
export class SyncfusionSchedulerComponent {
  public selectedDate: Date = new Date(2024, 3, 4);
  scheduleObj: any;
  public group: GroupModel = {
    resources: ['Projects', 'Categories']
  };
  public projectDataSource: Object[] = [
    { text: 'Canada', name: 'Canada',id: 1, color: '#cb6bb2' },
    { text: 'United States of America', name: 'United States of America',id: 2, color: '#56ca85' },
    { text: 'Australia', name: 'Australia',id: 3, color: '#df5286' }
  ];
  public categoryDataSource: Object[] = [
    { text: 'monthlypayroll', name: 'Monthly Payroll', id: 1, groupId: 1, color: '#5733ff' },
    { text: 'weeklypayroll', name: 'Weekly Payroll', id: 2, groupId: 1, color: '#FF5733'},
    { text: 'monthlypayroll', name: 'Monthly Payroll',id: 3, groupId: 2, color: '#33FF57'},
    { text: 'weeklypayroll', name: 'Weekly Payroll',id: 4, groupId: 2, color: '#5978ee'}
  ];

  // public categoryDataSource: Object[] = [
  //   { text: 'monthlypayroll', name: 'Monthly Payroll', id: 1, groupId: 1,  },
  //   { text: 'weeklypayroll', name: 'Weekly Payroll', id: 2, groupId: 1,},
  //   { text: 'monthlypayroll', name: 'Monthly Payroll',id: 3, groupId: 2, },
  //   { text: 'weeklypayroll', name: 'Weekly Payroll',id: 4, groupId: 2, }
  // ];
  public timeScale: TimeScaleModel = { enable: false}
  public allowMultiple: Boolean = true;
  public eventSettings: EventSettingsModel = {
    dataSource: <Object[]>extend([], resourceData.concat(timelineResourceData), null, true)
  };

  getEmployeeName(value: ResourceDetails | TreeViewArgs): string {
    return ((value as ResourceDetails).resourceData) ?
      (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] as string
      : (value as TreeViewArgs).resourceName;
  }
  getEmployeeImage(value: ResourceDetails | TreeViewArgs): string {
    let resourceName: string = this.getEmployeeName(value);
    return resourceName.replace(' ', '-').toLowerCase();
  }

  oneventRendered(args: EventRenderedArgs): void {
    let categoryColor: string = args.data['CategoryColor'] as string;
    if (!args.element || !categoryColor) {
        return;
    }
    // if (this.scheduleObj.currentView === 'Agenda') {
    //     (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
    // } else {
        args.element.style.backgroundColor = categoryColor;
    // }
}
}
