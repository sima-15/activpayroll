import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

/* eslint-disable */

const baseData: any[] = [
    {
        "TaskID": 1,
        "OwnerID": 1,
        "RoomID": 1,
        "Title": "Review",
        "Description": "",
        "StartTimezone": null,
        "Start": "2024-02-05T08:30:00.000Z",
        "End": "2024-02-05T09:00:00.000Z",
        "EndTimezone": null,
        "RecurrenceRule": null,
        "RecurrenceID": null,
        "RecurrenceException": null,
        "IsAllDay": false,
        "Type":'#0055A7'
    },
    {
        "TaskID": 2,
        "OwnerID": 1,
        "RoomID": 2,
        "Title": "Payment",
        "Description": "",
        "StartTimezone": null,
        "Start": "2024-02-05T10:00:00.000Z",
        "End": "2024-02-05T11:00:00.000Z",
        "EndTimezone": null,
        "RecurrenceRule": null,
        "RecurrenceID": null,
        "RecurrenceException": null,
        "IsAllDay": false
    },
    {
        "TaskID": 3,
        "OwnerID": 1,
        "RoomID": 3,
        "Title": "Validate",
        "Description": "",
        "StartTimezone": null,
        "Start": "2024-02-05T10:00:00.000Z",
        "End": "2024-02-05T11:00:00.000Z",
        "EndTimezone": null,
        "RecurrenceRule": null,
        "RecurrenceID": null,
        "RecurrenceException": null,
        "IsAllDay": true
    }
];

const currentYear = new Date().getFullYear();
const parseAdjust = (eventDate: string): Date => {
    const date = new Date(eventDate);
    date.setFullYear(currentYear);
    return date;
};

// const randomInt = (min, max): number => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

const randomInt = (): number => {
    return Math.random();
}

export const displayDate = new Date();

//export const displayDate = new Date(currentYear, 5, 24);

export const sampleData = baseData.map(dataItem => (
    <SchedulerEvent> {
        id: dataItem.TaskID,
        start: parseAdjust(dataItem.Start),
        startTimezone: dataItem.startTimezone,
        end: parseAdjust(dataItem.End),
        endTimezone: dataItem.endTimezone,
        isAllDay: dataItem.IsAllDay,
        title: dataItem.Title,
        description: dataItem.Description,
        recurrenceRule: dataItem.RecurrenceRule,
        recurrenceId: dataItem.RecurrenceID,
        recurrenceException: dataItem.RecurrenceException,
        Type: dataItem.Type,

        roomId: dataItem.RoomID,
        ownerID: dataItem.OwnerID
    }
));

export const sampleDataWithResources = baseData.map(dataItem => (
    <SchedulerEvent> {
        id: dataItem.TaskID,
        start: parseAdjust(dataItem.Start),
        startTimezone: dataItem.startTimezone,
        end: parseAdjust(dataItem.End),
        endTimezone: dataItem.endTimezone,
        isAllDay: dataItem.IsAllDay,
        title: dataItem.Title,
        description: dataItem.Description,
        recurrenceRule: dataItem.RecurrenceRule,
        recurrenceId: dataItem.RecurrenceID,
        recurrenceException: dataItem.RecurrenceException,
        roomId: randomInt(),
        attendees: [randomInt()]
    }
));

export const sampleDataWithCustomSchema = baseData.map(dataItem => (
    {
        ...dataItem,
        Start: parseAdjust(dataItem.Start),
        End: parseAdjust(dataItem.End)
    }
));