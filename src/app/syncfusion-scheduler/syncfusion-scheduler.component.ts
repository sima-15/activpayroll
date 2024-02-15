import { Component, ViewEncapsulation } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import {
    TimelineViewsService, AgendaService, GroupModel, EventSettingsModel, ResizeService, DragAndDropService,
    ResourceDetails, TreeViewArgs, TimeScaleModel
} from '@syncfusion/ej2-angular-schedule';
import { timelineResourceData, resourceData } from './datasource';

@Component({
  selector: 'app-syncfusion-scheduler',
  templateUrl: './syncfusion-scheduler.component.html',
  styleUrls: ['./syncfusion-scheduler.component.css'], encapsulation: ViewEncapsulation.None,
  providers: [TimelineViewsService, AgendaService, ResizeService, DragAndDropService]
})
export class SyncfusionSchedulerComponent {
  public selectedDate: Date = new Date(2018, 3, 4);
  public group: GroupModel = {
    resources: ['Projects', 'Categories']
  };
  public projectDataSource: Object[] = [
    { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
    { text: 'PROJECT 2', id: 2, color: '#56ca85' },
    { text: 'PROJECT 3', id: 3, color: '#df5286' }
  ];
  public categoryDataSource: Object[] = [
    { text: 'Nancy', id: 1, groupId: 1, color: '#df5286', designation: "Cardioligst" },
    { text: 'Margaret', id: 2, groupId: 1, color: '#7fa900', designation: "Neurologist" },
    { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57', designation: "Orthopedic Surgeon" },
    { text: 'Laura', id: 4, groupId: 2, color: '#5978ee', designation: "Dentist" }
  ];
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
}
