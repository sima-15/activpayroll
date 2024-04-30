// src/app/user-table/user-table.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {
    displayedColumns: string[] = ['userName', ...Array.from({ length: 14 }, (_, i) => 'day' + i)];
    dataSource: any = [];
    showTask: boolean = false;
    days: string[] = [];
    user: any = [
        {
            "name": "Canada",
            "image": "../assets/image/canada-flag.png",
            "group": "group1",
            "isGroupItem": true,
            "tasks": []
        },
        {
            "name": "Production Staff",
            "image": "",
            "group": "group1",
            "isGroupItem": true,
            "tasks": []
        },
        {
            "name": "Monthly Payroll",
            "image": "../assets/image/warning-red-icon.png",
            "group": "group1",
            "isGroupItem": false,
            "tasks": [
                {
                    "name": "Validate",
                    "color": "#CCFFEF",
                    "startDate": "2024-02-15T17:02:20.018Z",
                    "endDate": "2024-02-18T17:02:20.018Z"
                },
                {
                    "name": "Collate",
                    "color": "#FEE2E2",
                    "startDate": "2024-02-09T17:02:20.018Z",
                    "endDate": "2024-02-11T17:02:20.018Z"
                }

            ]
        },
        {
            "name": "Fortnightly Payroll",
            "image": "",
            "group": "group2",
            "isGroupItem": false,
            "tasks": [
                {
                    "name": "Pay",
                    "color": "#FEE2E2",
                    "startDate": "2024-02-20T17:02:20.018Z",
                    "endDate": "2024-02-21T17:02:20.018Z"
                },
                {
                    "name": "Report",
                    "color": "#FEE2E2",
                    "startDate": "2024-02-07T17:02:20.018Z",
                    "endDate": "2024-02-13T17:02:20.018Z"
                },
                {
                    "name": "Process",
                    "color": "#F0F0FF",
                    "startDate": "2024-02-05T17:02:20.018Z",
                    "endDate": "2024-02-08T17:02:20.018Z"
                }
            ]
        },
        {
            "name": "Facilities Management",
            "image": "",
            "group": "group1",
            "isGroupItem": true,
            "tasks": []
        },
        {
            "name": "Weekly Payroll",
            "image": "",
            "group": "group2",
            "isGroupItem": false,
            "tasks": [
                {
                    "name": "Validate",
                    "color": "#CCFFEF",
                    "startDate": "2024-02-15T17:02:20.018Z",
                    "endDate": "2024-02-18T17:02:20.018Z"
                },
                {
                    "name": "Collate",
                    "color": "#FEE2E2",
                    "startDate": "2024-02-17T17:02:20.018Z",
                    "endDate": "2024-02-18T17:02:20.018Z"
                },

            ]
        },

        {
            "name": "United States of America",
            "image": "../assets/image/canada-flag.png",
            "group": "group2",
            "isGroupItem": true,
            "tasks": []
        },
        {
            "name": "Production Staff",
            "image": "",
            "group": "group1",
            "isGroupItem": true,
            "tasks": []
        },
        {
            "name": "Monthly Payroll",
            "image": "../assets/image/warning-red-icon.png",
            "group": "group1",
            "isGroupItem": false,
            "tasks": [
                {
                    "name": "Collate",
                    "color": "#FEE2E2",
                    "startDate": "2024-02-09T17:02:20.018Z",
                    "endDate": "2024-02-13T17:02:20.018Z"
                },
                {
                    "name": "Validate",
                    "color": "#CCFFEF",
                    "startDate": "2024-02-14T17:02:20.018Z",
                    "endDate": "2024-02-18T17:02:20.018Z"
                }
            ]
        },
        {
            "name": "Fortnightly Payroll",
            "image": "",
            "group": "group2",
            "isGroupItem": false,
            "tasks": [
                {
                    "name": "Pay",
                    "color": "#FEE2E2",
                    "startDate": "2024-02-06T17:02:20.018Z",
                    "endDate": "2024-02-07T17:02:20.018Z"
                },
                {
                    "name": "Report",
                    "color": "#FEE2E2",
                    "startDate": "2024-02-07T17:02:20.018Z",
                    "endDate": "2024-02-13T17:02:20.018Z"
                },
                {
                    "name": "Process",
                    "color": "#F0F0FF",
                    "startDate": "2024-02-05T17:02:20.018Z",
                    "endDate": "2024-02-08T17:02:20.018Z"
                }
            ]
        },
        {
            "name": "Facilities Management",
            "image": "",
            "group": "group1",
            "isGroupItem": true,
            "tasks": []
        },
        {
            "name": "Weekly Payroll",
            "image": "",
            "group": "group2",
            "isGroupItem": false,
            "tasks": [
                {
                    "name": "Collate",
                    "color": "#FEE2E2",
                    "startDate": "2024-02-17T17:02:20.018Z",
                    "endDate": "2024-02-18T17:02:20.018Z"
                },
                {
                    "name": "Validate",
                    "color": "#CCFFEF",
                    "startDate": "2024-02-15T17:02:20.018Z",
                    "endDate": "2024-02-18T17:02:20.018Z"
                },
                {
                    "name": "Pay",
                    "color": "#F0F0FF",
                    "startDate": "2024-02-19T17:02:20.018Z",
                    "endDate": "2024-02-19T17:02:20.018Z"
                }
            ]
        },
    ];

    constructor() { }

    ngOnInit(): void {
        const today = new Date();
        // Calculate the date range
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - 6);

        const endDate = new Date(today);
        endDate.setDate(today.getDate() + 7);

        this.days = Array.from({ length: 14 }, (_, i) => this.getFormattedDate(i, startDate));
        this.dataSource = this.user.map((user: any) => ({
            ...user,
            // tasks: generateRandomTasks(startDate, endDate, user),
        }));
    }

    getFormattedDate(offset: number, startDate: Date): string {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + offset);
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    }



    isTaskOnDay(task: any, day: string): boolean {
        let dayLocal = new Date(new Date(day).setFullYear(new Date().getFullYear())).toLocaleDateString();
        const taskStartDate = new Date(task.startDate).toLocaleDateString();
        const taskEndDate = new Date(task.endDate).toLocaleDateString();

        if(task.name === 'Validate'){
            console.log(taskEndDate,taskStartDate)
            var diff = Math.abs(new Date(task.startDate).getTime() - new Date(task.endDate).getTime());
            var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
            console.log(diffDays)
            if(diffDays%2 !=0){
                let day=(diffDays+1)/2
                console.log(day)
            }
        }
       
        return (dayLocal.valueOf() >= taskStartDate.valueOf() && dayLocal.valueOf() <= taskEndDate.valueOf());
    }

    groupTasks(tasks: any[]): any[][] {
        //Group tasks by name for a specific user
        const groupedTasks: any[][] = [];
        const groups = new Map();
        for (const task of tasks) {
            const key = task.name;
            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key).push(task);
        }
        groups.forEach((group) => {
            groupedTasks.push(group);
        });

        return groupedTasks;
    }

    isWeekend(date: any): boolean {
        const dayOfWeek = new Date(date).getDay();
        return dayOfWeek === 0 || dayOfWeek === 6;
    }

    calculateRulerPosition(day: any): boolean {
        const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        return (day == currentDate);
    }

    isEventSpanningMultipleDays(task): number {
        const taskStartDate: any = new Date(task.startDate);
        const taskEndDate: any = new Date(task.endDate);

        const dayDiff = Math.ceil((taskEndDate - taskStartDate) / (1000 * 60 * 60 * 24))

        return (dayDiff / 7) * 100;
    }


    getBorderRadius(task, day) {
        let dayLocal = new Date(new Date(day).setFullYear(new Date().getFullYear())).toLocaleDateString();
        const taskStartDate = new Date(task.startDate).toLocaleDateString();
        const taskEndDate = new Date(task.endDate).toLocaleDateString();
        if (taskEndDate == dayLocal && taskStartDate == dayLocal) {
            return 'singleDayEvent';
        } else if (taskEndDate == dayLocal) {
            return 'rightEvent';
        } else if (taskStartDate == dayLocal) {
            return 'leftEvent';
        }
        return 'task';
    }


}

function generateRandomTasks(startDate: Date, endDate: Date, user: any): any[] {
    const taskColors = ['#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57']; // Add more colors if needed
    const tasks = [];

    for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
        const taskStartDate = new Date(startDate);
        const taskEndDate = new Date(endDate);

        // Randomly set task start and end days within the 14-day range
        const randomStartOffset = Math.floor(Math.random() * 14);
        taskStartDate.setDate(taskStartDate.getDate() + randomStartOffset);

        const randomDuration = Math.floor(Math.random() * (14 - randomStartOffset)) + 1;
        taskEndDate.setDate(taskStartDate.getDate() + randomDuration);

        tasks.push({
            name: `Task ${i + 1}`,
            color: taskColors[i % taskColors.length],
            startDate: taskStartDate,
            endDate: taskEndDate,
        });
    }
    return tasks;
}