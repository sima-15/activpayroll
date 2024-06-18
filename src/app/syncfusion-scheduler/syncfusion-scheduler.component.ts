import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  DragAndDropService,
  EventRenderedArgs,
  EventSettingsModel,
  GroupModel,
  RenderCellEventArgs,
  ResizeService,
  ResourceDetails,
  ScheduleComponent,
  TimelineViewsService,
  TimeScaleModel,
  TreeViewArgs,
} from '@syncfusion/ej2-angular-schedule';
import { createElement, Internationalization } from '@syncfusion/ej2-base';

import { resourceData } from './datasource';

@Component({
  selector: 'app-syncfusion-scheduler',
  templateUrl: './syncfusion-scheduler.component.html',
  styleUrls: ['./syncfusion-scheduler.component.css'],
  providers: [TimelineViewsService, ResizeService, DragAndDropService],
})
export class SyncfusionSchedulerComponent implements AfterViewInit {
  ngAfterViewInit(): void {}
  isAdmin = true;

  public selectedDate: Date = new Date(
    new Date().setDate(new Date().getDate() - 6)
  );

  @ViewChild('scheduleObj', { static: false })
  public scheduleObj: ScheduleComponent;
  public instance: Internationalization = new Internationalization();
  public originalData = [
    {
      CountryId: 1,
      CountryName: 'Canada',
      IsoCode: 'CAN',
      Entities: [
        {
          EntityId: 11,
          CountryId: 1,
          EntityName: 'Production Staff',
          Payrolls: [
            {
              PayrollId: 22,
              CountryId: 1,
              EntityId: 11,
              PayrollName: 'Monthly Payroll',
              Stage: [
                {
                  StageId: 33,
                  PayrollId: 22,
                  CountryId: 1,
                  EntityId: 11,
                  StageName: 'Report',
                  StartTime: '2024-06-06T00:00:00',
                  EndTime: '2024-06-11T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 34,
                  PayrollId: 22,
                  CountryId: 1,
                  EntityId: 11,
                  StageName: 'Collate',
                  StartTime: '2024-06-11T00:00:00',
                  EndTime: '2024-06-19T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 2,
                },
                {
                  StageId: 35,
                  PayrollId: 22,
                  CountryId: 1,
                  EntityId: 11,
                  StageName: 'Validate',
                  StartTime: '2024-06-19T00:00:00',
                  EndTime: '2024-06-23T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 3,
                },
              ],
            },
            {
              PayrollId: 23,
              CountryId: 1,
              EntityId: 11,
              PayrollName: 'Fortnightly Payroll',
              Stage: [
                {
                  StageId: 41,
                  PayrollId: 23,
                  CountryId: 1,
                  EntityId: 11,
                  StageName: 'Report',
                  StartTime: '2024-06-06T00:00:00',
                  EndTime: '2024-06-11T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 42,
                  PayrollId: 23,
                  CountryId: 1,
                  EntityId: 11,
                  StageName: 'Collate',
                  StartTime: '2024-06-11T00:00:00',
                  EndTime: '2024-06-14T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 43,
                  PayrollId: 23,
                  CountryId: 1,
                  EntityId: 11,
                  StageName: 'Validate',
                  StartTime: '2024-06-14T00:00:00',
                  EndTime: '2024-06-17T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 44,
                  PayrollId: 23,
                  CountryId: 1,
                  EntityId: 11,
                  StageName: 'Process',
                  StartTime: '2024-06-17T00:00:00',
                  EndTime: '2024-06-19T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 2,
                },
                {
                  StageId: 45,
                  PayrollId: 23,
                  CountryId: 1,
                  EntityId: 11,
                  StageName: 'Review',
                  StartTime: '2024-06-19T00:00:00',
                  EndTime: '2024-06-21T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 3,
                },
                {
                  StageId: 46,
                  PayrollId: 23,
                  CountryId: 1,
                  EntityId: 11,
                  StageName: 'Payments',
                  StartTime: '2024-06-21T00:00:00',
                  EndTime: '2024-06-23T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 3,
                },
              ],
            },
          ],
        },
        {
          EntityId: 12,
          CountryId: 1,
          EntityName: 'Facilities Management',
          Payrolls: [
            {
              PayrollId: 24,
              CountryId: 1,
              EntityId: 12,
              PayrollName: 'Weekly Payroll',
              Stage: [
                {
                  StageId: 51,
                  PayrollId: 24,
                  CountryId: 1,
                  EntityId: 12,
                  StageName: 'Report',
                  StartTime: '2024-06-07T00:00:00',
                  EndTime: '2024-06-10T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 52,
                  PayrollId: 24,
                  CountryId: 1,
                  EntityId: 12,
                  StageName: 'Collate',
                  StartTime: '2024-06-10T00:00:00',
                  EndTime: '2024-06-12T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 53,
                  PayrollId: 24,
                  CountryId: 1,
                  EntityId: 12,
                  StageName: 'Process',
                  StartTime: '2024-06-12T00:00:00',
                  EndTime: '2024-06-14T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 54,
                  PayrollId: 24,
                  CountryId: 1,
                  EntityId: 12,
                  StageName: 'Pay',
                  StartTime: '2024-06-14T00:00:00',
                  EndTime: '2024-06-14T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 55,
                  PayrollId: 24,
                  CountryId: 1,
                  EntityId: 12,
                  StageName: 'Report',
                  StartTime: '2024-06-15T00:00:00',
                  EndTime: '2024-06-17T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 56,
                  PayrollId: 24,
                  CountryId: 1,
                  EntityId: 12,
                  StageName: 'Collate',
                  StartTime: '2024-06-17T00:00:00',
                  EndTime: '2024-06-19T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 1,
                },
                {
                  StageId: 57,
                  PayrollId: 24,
                  CountryId: 1,
                  EntityId: 12,
                  StageName: 'Process',
                  StartTime: '2024-06-19T00:00:00',
                  EndTime: '2024-06-21T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 3,
                },
                {
                  StageId: 58,
                  PayrollId: 24,
                  CountryId: 1,
                  EntityId: 12,
                  StageName: 'Pay',
                  StartTime: '2024-06-21T00:00:00',
                  EndTime: '2024-06-21T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 3,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      CountryId: 2,
      CountryName: 'United States of America',
      IsoCode: 'USA',
      Entities: [
        {
          EntityId: 21,
          CountryId: 2,
          EntityName: 'Production Staff',
          Payrolls: [
            {
              PayrollId: 61,
              CountryId: 2,
              EntityId: 21,
              PayrollName: 'Monthly Payroll',
              Stage: [
                {
                  StageId: 1,
                  PayrollId: 61,
                  CountryId: 2,
                  EntityId: 21,
                  StageName: 'Report',
                  StartTime: '2024-06-08T00:00:00',
                  EndTime: '2024-06-12T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 2,
                  PayrollId: 61,
                  CountryId: 2,
                  EntityId: 21,
                  StageName: 'Collate',
                  StartTime: '2024-06-12T00:00:00',
                  EndTime: '2024-06-20T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 1,
                },
                {
                  StageId: 3,
                  PayrollId: 61,
                  CountryId: 2,
                  EntityId: 21,
                  StageName: 'Validate',
                  StartTime: '2024-06-20T00:00:00',
                  EndTime: '2024-06-23T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 3,
                },
              ],
            },
            {
              PayrollId: 62,
              CountryId: 2,
              EntityId: 21,
              PayrollName: 'Fortnightly Payroll',
              Stage: [
                {
                  StageId: 11,
                  PayrollId: 62,
                  CountryId: 2,
                  EntityId: 21,
                  StageName: 'Report',
                  StartTime: '2024-06-06T00:00:00',
                  EndTime: '2024-06-10T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 12,
                  PayrollId: 62,
                  CountryId: 2,
                  EntityId: 21,
                  StageName: 'Collate',
                  StartTime: '2024-06-10T00:00:00',
                  EndTime: '2024-06-13T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 13,
                  PayrollId: 62,
                  CountryId: 2,
                  EntityId: 21,
                  StageName: 'Validate',
                  StartTime: '2024-06-13T00:00:00',
                  EndTime: '2024-06-16T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 14,
                  PayrollId: 62,
                  CountryId: 2,
                  EntityId: 21,
                  StageName: 'Process',
                  StartTime: '2024-06-16T00:00:00',
                  EndTime: '2024-06-18T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 1,
                },
                {
                  StageId: 15,
                  PayrollId: 62,
                  CountryId: 2,
                  EntityId: 21,
                  StageName: 'Review',
                  StartTime: '2024-06-18T00:00:00',
                  EndTime: '2024-06-20T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 3,
                },
                {
                  StageId: 16,
                  PayrollId: 62,
                  CountryId: 2,
                  EntityId: 21,
                  StageName: 'Payments',
                  StartTime: '2024-06-20T00:00:00',
                  EndTime: '2024-06-22T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 3,
                },
              ],
            },
          ],
        },
        {
          EntityId: 22,
          CountryId: 2,
          EntityName: 'Facilities Management',
          Payrolls: [
            {
              PayrollId: 63,
              CountryId: 2,
              EntityId: 22,
              PayrollName: 'Weekly Payroll',
              Stage: [
                {
                  StageId: 71,
                  PayrollId: 63,
                  CountryId: 2,
                  EntityId: 22,
                  StageName: 'Report',
                  StartTime: '2024-06-07T00:00:00',
                  EndTime: '2024-06-10T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 72,
                  PayrollId: 63,
                  CountryId: 2,
                  EntityId: 22,
                  StageName: 'Collate',
                  StartTime: '2024-06-10T00:00:00',
                  EndTime: '2024-06-12T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 73,
                  PayrollId: 63,
                  CountryId: 2,
                  EntityId: 22,
                  StageName: 'Process',
                  StartTime: '2024-06-12T00:00:00',
                  EndTime: '2024-06-14T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 74,
                  PayrollId: 63,
                  CountryId: 2,
                  EntityId: 22,
                  StageName: 'Pay',
                  StartTime: '2024-06-14T00:00:00',
                  EndTime: '2024-06-14T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 75,
                  PayrollId: 63,
                  CountryId: 2,
                  EntityId: 22,
                  StageName: 'Report',
                  StartTime: '2024-06-15T00:00:00',
                  EndTime: '2024-06-17T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 76,
                  PayrollId: 63,
                  CountryId: 2,
                  EntityId: 22,
                  StageName: 'Collate',
                  StartTime: '2024-06-17T00:00:00',
                  EndTime: '2024-06-19T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 1,
                },
                {
                  StageId: 77,
                  PayrollId: 63,
                  CountryId: 2,
                  EntityId: 22,
                  StageName: 'Process',
                  StartTime: '2024-06-19T00:00:00',
                  EndTime: '2024-06-21T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 3,
                },
                {
                  StageId: 78,
                  PayrollId: 63,
                  CountryId: 2,
                  EntityId: 22,
                  StageName: 'Pay',
                  StartTime: '2024-06-21T00:00:00',
                  EndTime: '2024-06-21T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 3,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      CountryId: 3,
      CountryName: 'Australia',
      IsoCode: 'AUS',
      Entities: [
        {
          EntityId: 31,
          CountryId: 3,
          EntityName: 'Production Staff',
          Payrolls: [
            {
              PayrollId: 81,
              CountryId: 3,
              EntityId: 31,
              PayrollName: 'Monthly Payroll',
              Stage: [
                {
                  StageId: 91,
                  PayrollId: 81,
                  CountryId: 3,
                  EntityId: 31,
                  StageName: 'Report',
                  StartTime: '2024-06-08T00:00:00',
                  EndTime: '2024-06-11T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 92,
                  PayrollId: 81,
                  CountryId: 3,
                  EntityId: 31,
                  StageName: 'Collate',
                  StartTime: '2024-06-11T00:00:00',
                  EndTime: '2024-06-19T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 1,
                },
                {
                  StageId: 93,
                  PayrollId: 81,
                  CountryId: 3,
                  EntityId: 31,
                  StageName: 'Validate',
                  StartTime: '2024-06-19T00:00:00',
                  EndTime: '2024-06-23T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 3,
                },
              ],
            },
            {
              PayrollId: 82,
              CountryId: 3,
              EntityId: 31,
              PayrollName: 'Fortnightly Payroll',
              Stage: [
                {
                  StageId: 94,
                  PayrollId: 82,
                  CountryId: 3,
                  EntityId: 31,
                  StageName: 'Report',
                  StartTime: '2024-06-06T00:00:00',
                  EndTime: '2024-06-14T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 95,
                  PayrollId: 82,
                  CountryId: 3,
                  EntityId: 31,
                  StageName: 'Collate',
                  StartTime: '2024-06-14T00:00:00',
                  EndTime: '2024-06-17T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 96,
                  PayrollId: 82,
                  CountryId: 3,
                  EntityId: 31,
                  StageName: 'Validate',
                  StartTime: '2024-06-17T00:00:00',
                  EndTime: '2024-06-20T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 1,
                },
                {
                  StageId: 97,
                  PayrollId: 82,
                  CountryId: 3,
                  EntityId: 31,
                  StageName: 'Review',
                  StartTime: '2024-06-20T00:00:00',
                  EndTime: '2024-06-22T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 3,
                },
              ],
            },
            {
              PayrollId: 83,
              CountryId: 3,
              EntityId: 31,
              PayrollName: 'Weekly Payroll',
              Stage: [
                {
                  StageId: 25,
                  PayrollId: 83,
                  CountryId: 3,
                  EntityId: 31,
                  StageName: 'Report',
                  StartTime: '2024-06-07T00:00:00',
                  EndTime: '2024-06-10T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 26,
                  PayrollId: 83,
                  CountryId: 3,
                  EntityId: 31,
                  StageName: 'Collate',
                  StartTime: '2024-06-10T00:00:00',
                  EndTime: '2024-06-12T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 27,
                  PayrollId: 83,
                  CountryId: 3,
                  EntityId: 31,
                  StageName: 'Process',
                  StartTime: '2024-06-12T00:00:00',
                  EndTime: '2024-06-14T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 28,
                  PayrollId: 83,
                  CountryId: 3,
                  EntityId: 31,
                  StageName: 'Pay',
                  StartTime: '2024-06-14T00:00:00',
                  EndTime: '2024-06-14T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 29,
                  PayrollId: 83,
                  CountryId: 3,
                  EntityId: 31,
                  StageName: 'Report',
                  StartTime: '2024-06-15T00:00:00',
                  EndTime: '2024-06-17T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 0,
                },
                {
                  StageId: 30,
                  PayrollId: 83,
                  CountryId: 3,
                  EntityId: 31,
                  StageName: 'Collate',
                  StartTime: '2024-06-17T00:00:00',
                  EndTime: '2024-06-19T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 1,
                },
                {
                  StageId: 36,
                  PayrollId: 83,
                  CountryId: 3,
                  EntityId: 31,
                  StageName: 'Process',
                  StartTime: '2024-06-19T00:00:00',
                  EndTime: '2024-06-21T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 3,
                },
                {
                  StageId: 37,
                  PayrollId: 83,
                  CountryId: 3,
                  EntityId: 31,
                  StageName: 'Pay',
                  StartTime: '2024-06-21T00:00:00',
                  EndTime: '2024-06-21T00:00:00',
                  IsAllDay: false,
                  always: false,
                  Status: 3,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  public group: GroupModel = {
    resources: ['Companies', 'Countries', 'Payrolls'],
  };

  public clgroup: GroupModel = {
    resources: ['Countries', 'Payrolls'],
  };

  public isReadOnly = true;
  public CompanyDataSource: Object[] = [];
  public CountriesDataSource: Object[] = [];
  public PayrollsDataSource: Object[] = [];
  public cary: Object[] = [];
  public conary: Object[] = [];
  public timeScale: TimeScaleModel = { enable: false };
  public showHeaderBar: Boolean = false;
  public allowMultiple: Boolean = true;
  public eventSettings: EventSettingsModel = {
    dataSource: resourceData,
  };
  public transformedData = {
    countries: [],
    entities: [],
    payrolls: [],
    stages: [],
  };

   ngOnInit(): void {
    this.transformedData = this.transformData(this.originalData);
    this.CompanyDataSource = this.transformedData.countries;
    this.CountriesDataSource = this.transformedData.entities;
    this.PayrollsDataSource = this.transformedData.payrolls;
    this.eventSettings.dataSource = this.transformedData.stages;
    this.cary = this.transformedData.countries.map((item: any) => item.name);
    this.conary = this.CountriesDataSource.map((item: any) => item.name);
  }

   transformData(data: any[]): any {
    const transformedCountries = data.map((country) => ({
      text: country.CountryName,
      name: country.CountryName,
      id: country.CountryId,
      IsoCode: country.IsoCode,
    }));

    const transformedEntities = data.flatMap((country) =>
      country.Entities.map((entity) => ({
        text: entity.EntityName,
        name: entity.EntityName,
        id: entity.EntityId, //Entity id
        groupId: entity.CountryId, // county id
      }))
    );

    const transformedPayrolls = data.flatMap((country) =>
      country.Entities.flatMap((entity) =>
        entity.Payrolls.map((payroll) => ({
          text: payroll.PayrollName,
          name: payroll.PayrollName,
          id: payroll.PayrollId,
          groupId: payroll.EntityId,
          critical: payroll.Stage.some((stage) => stage.Status === 2),
        }))
      )
    );

    const transformedStages = data.flatMap((country) =>
      country.Entities.flatMap((entity) =>
        entity.Payrolls.flatMap((payroll) =>
          payroll.Stage.map((stage) => ({
            Id: stage.StageId,
            Subject: stage.StageName,
            StartTime: new Date(stage.StartTime).toUTCString(),
            EndTime: new Date(stage.EndTime).toUTCString(),
            IsAllDay: false,
            CountryId: stage.EntityId, // CountriesDataSource id
            PayrollId: stage.PayrollId, //payroll datasource id
            CompanyId: stage.CountryId, // CompanyDataSource id,
            Status: stage.Status,
          }))
        )
      )
    );

    return {
      countries: transformedCountries,
      entities: transformedEntities,
      payrolls: transformedPayrolls,
      stages: transformedStages,
    };
  }


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
    let categoryColor: number = args.data['Status'] as number;
    if (args.element == undefined || categoryColor == undefined) {
      return;
    }

    args.element.classList.add(
      categoryColor == 0
        ? 'completed'
        : categoryColor == 1
        ? 'In-progress'
        : categoryColor == 2
        ? 'In-progress-overdue'
        : 'upcoming'
    );

  }

  getDateHeaderText: Function = (value: Date) => {
    return this.instance.formatDate(value, { skeleton: 'MMMEd' });
  };

  groupIndex = [];
  public onRenderCell(args: RenderCellEventArgs): void {
    if (args.elementType === 'resourceHeader') {
      if (
        this.cary.includes(args.element.ariaLabel?.replace(' resource', ''))
      ) {
        this.groupIndex.push(args.groupIndex);
        (args.element as any).style.backgroundColor = '#f5f5f5';
        (args.element as any).style.borderTop = '1px solid #737373';
        (args.element as any).style.fontWeight = '700';
      }

      if (
        this.conary.includes(args.element.ariaLabel?.replace(' resource', ''))
      ) {
        (args.element as any).style.backgroundColor = '#fafafa';
        (args.element as any).style.fontWeight = '500';
      }
    }

    if (
      args.elementType === 'resourceGroupCells' &&
      this.groupIndex.includes(args.groupIndex)
    ) {
      (args.element as any).style.backgroundColor = '#f5f5f5';
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
        innerHTML: '<b>Payrolls</b>',
        styles: 'padding-left:15px',
      });
      args.element.appendChild(ele);
    }
  }
}
