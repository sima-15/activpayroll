import { AfterViewInit, Component, ViewChild } from '@angular/core';
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
import { Internationalization ,createElement} from '@syncfusion/ej2-base';
import { resourceData, CLresourceData } from './datasource';

@Component({
  selector: 'app-syncfusion-scheduler',
  templateUrl: './syncfusion-scheduler.component.html',
  styleUrls: ['./syncfusion-scheduler.component.css'],
  providers: [TimelineViewsService, ResizeService, DragAndDropService],
})
export class SyncfusionSchedulerComponent implements AfterViewInit {
  ngAfterViewInit(): void {
  }
  isAdmin = true;

  public selectedDate: Date = new Date(
    new Date().setDate(new Date().getDate() - 6)
  );

  @ViewChild('scheduleObj', { static: false })
  public scheduleObj: ScheduleComponent;
  public instance: Internationalization = new Internationalization();
  public group: GroupModel = {
    resources: ['Companies', 'Countries', 'Payrolls'],
  };

  public clgroup: GroupModel = {
    resources: ['Countries', 'Payrolls'],
  };

  public CompanyDataSource: Object[] = [
    {
      text: 'Canada',
      name: 'Canada',
      id: 1,
      color: '#cb6bb2',
    },
    {
      text: 'Australia',
      name: 'Australia',
      id: 2,
      color: '#cb6bb2',
    },
  ];

  public CountriesDataSource: Object[] = [
    {
      text: 'Production Stuff',
      name: 'Production Stuff',
      id: 1,
      color: '#cb6bb2',
      groupId: 1,
    },
    {
      text: 'Facility Management',
      name: 'Facility Management',
      id: 2,
      color: '#df5286',
      groupId: 1,
    },
    {
      text: 'Facilities Management',
      name: 'Facilities Management',
      id: 3,
      color: '#df5286',
      groupId: 2,
    },
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
    {
      text: 'FortnightlyPayroll',
      name: 'Fortnightly Payroll',
      id: 5,
      groupId: 3,
      color: '#66FFD0',
    },
    {
      text: 'FortnightlyPayroll',
      name: 'Fortnightly Payroll',
      id: 6,
      groupId: 2,
      color: '#66FFD0',
    },
  ];
  isReadOnly = true;

  public timeScale: TimeScaleModel = { enable: false };
  public showHeaderBar: Boolean = false;
  public allowMultiple: Boolean = true;
  public eventSettings: EventSettingsModel = {
    dataSource: resourceData,
  };

  getCountryName(value: ResourceDetails | TreeViewArgs): string {
    return (value as ResourceDetails).resourceData
      ? ((value as ResourceDetails).resourceData[
          (value as ResourceDetails).resource.textField
        ] as string)
      : (value as TreeViewArgs).resourceName;
  }

  getCountryImage(value: ResourceDetails | TreeViewArgs): string {
    let resourceName: string = this.getCountryName(value);
    return resourceName.replace(' ', '-').toLowerCase();
  }

  oneventRendered(args: EventRenderedArgs): void {
    let categoryColor: string = args.data['CategoryColor'] as string;
    if (!args.element || !categoryColor) {
      return;
    }
    args.element.style.backgroundColor = categoryColor;
    
  }

  getDateHeaderText: Function = (value: Date) => {
    return this.instance.formatDate(value, { skeleton: 'MMMEd' });
  };

  cary=this.CompanyDataSource.map((item:any)=>item.name);
  conary =this.CountriesDataSource.map((item:any)=>item.name);
  groupIndex =[];
  public onRenderCell(args: RenderCellEventArgs): void {

    if(args.elementType === 'resourceHeader'){
      if( this.cary.includes(args.element.ariaLabel?.replace(' resource',''))){
        this.groupIndex.push(args.groupIndex);
        (args.element as any).style.borderTop = '1px solid #737373';
        (args.element as any).style.fontWeight ='700';
      }
      if( this.conary.includes(args.element.ariaLabel?.replace(' resource',''))){
        (args.element as any).style.fontWeight ='500';
      }
    }

    if (args.elementType === 'resourceGroupCells' && this.groupIndex.includes(args.groupIndex)) {
      (args.element as any).style.borderTop = '1px solid #737373';
    }

    if (args.elementType === 'dateHeader') {
      if (args.date && (args.date.getDay() === 6 || args.date.getDay() === 0)) {
        (args.element as any).style.color = '#D4D4D4';
      }
    }
    if (
      (args.elementType === 'workCells' ||
        args.elementType === 'resourceGroupCells') &&
      args.date
    ) {
      const cellDate = new Date(args.date.getTime());
      const date = new Date(cellDate.setHours(0, 0, 0));
      if (date.getTime() === new Date().setHours(0, 0, 0, 0)) {
        (args.element as any).style.borderLeft = '1px solid #4143E7';
        (args.element as any).style.borderRight = '1px solid #4143E7';
      }
    }
    if (args.elementType == 'emptyCells') {
        let ele: HTMLElement = createElement('div', {
          innerHTML: "<b>Payrolls</b>",
          styles:'padding-left:15px'
        });
        (args.element).appendChild(ele);
      }
    }

}
