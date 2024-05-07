import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import {
  TimelineViewsService,
  GroupModel,
  EventSettingsModel,
  ResizeService,
  DragAndDropService,
  ResourceDetails,
  TreeViewArgs,
  TimeScaleModel,
  EventRenderedArgs,
  ScheduleComponent,
  RenderCellEventArgs,
} from '@syncfusion/ej2-angular-schedule';
import { Internationalization } from '@syncfusion/ej2-base';
import { resourceData } from './datasource';

@Component({
  selector: 'app-syncfusion-scheduler',
  templateUrl: './syncfusion-scheduler.component.html',
  styleUrls: ['./syncfusion-scheduler.component.css'],
  providers: [TimelineViewsService, ResizeService, DragAndDropService],
})
export class SyncfusionSchedulerComponent {
  public selectedDate: Date = new Date(
    new Date().setDate(new Date().getDate() - 6)
  );
  @ViewChild('scheduleObj', { static: false })
  public scheduleObj: ScheduleComponent;
  public group: GroupModel = {
    resources: ['Countries', 'Payrolls'],
  };

  public CountriesDataSource: Object[] = [
    { text: 'Canada', name: 'Canada', id: 1, color: '#cb6bb2' },
    {
      text: 'United States of America',
      name: 'United States of America',
      id: 2,
      color: '#56ca85',
    },
    { text: 'Australia', name: 'Australia', id: 3, color: '#df5286' },
  ];
  public PayrollsDataSource: Object[] = [
    {
      text: 'monthlypayroll',
      name: 'Monthly Payroll',
      id: 1,
      groupId: 1,
      color: '#A8A8FF',
    },
    {
      text: 'weeklypayroll',
      name: 'Weekly Payroll',
      id: 2,
      groupId: 1,
      color: '#66FFD0',
    },
    {
      text: 'monthlypayroll',
      name: 'Monthly Payroll',
      id: 3,
      groupId: 2,
      color: '#86EFAC',
    },
    {
      text: 'weeklypayroll',
      name: 'Weekly Payroll',
      id: 4,
      groupId: 3,
      color: '#FF8B5C',
    },
  ];
  isReadOnly = true;

  public timeScale: TimeScaleModel = { enable: false };
  public showHeaderBar: Boolean = false;
  public allowMultiple: Boolean = true;
  public eventSettings: EventSettingsModel = {
    dataSource:resourceData
  };

  getEmployeeName(value: ResourceDetails | TreeViewArgs): string {
    return (value as ResourceDetails).resourceData
      ? ((value as ResourceDetails).resourceData[
          (value as ResourceDetails).resource.textField
        ] as string)
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

  public instance: Internationalization = new Internationalization();
  getDateHeaderText: Function = (value: Date) => {
    return this.instance.formatDate(value, { skeleton: 'MMMEd' });
  };

  public onRenderCell(args: RenderCellEventArgs): void {
    if (args.elementType === 'resourceGroupCells') {
      (args.element as any).style.borderTop = "1px solid #737373";
    }
    if ((args.elementType === 'workCells' || args.elementType === 'resourceGroupCells') && args.date) {
      var cellDate = new Date(args.date.getTime());
      var date = new Date(cellDate.setHours(0, 0, 0));
      if (date.getTime() === new Date().setHours(0, 0, 0, 0)) {
        (args.element as any).style.borderLeft= '1px solid #4143E7';
        (args.element as any).style.borderRight= '1px solid #4143E7';
      }
    }
  }
}
