// src/app/user-table/user-table.component.ts
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {
  displayedColumns: string[] = ['userName', ...Array.from({ length: 14 }, (_, i) => 'day' + i)];
  dataSource: any = [];
count: number = 0;
showTask: boolean = true;
  days: string[] = [];
  // user: any = [
  //   { name: 'User 1', image: 'https://placekitten.com/30/30', group: 'group1', tasks: [] },
  //   { name: 'User 2', image: 'https://placekitten.com/30/30', group: 'group1', tasks: [] },
  //   { name: 'User 3', image: 'https://placekitten.com/30/30', group: 'group1', tasks: [] },
  //   { name: 'User 4', image: 'https://placekitten.com/30/30', group: 'group2', tasks: [] },
  //   { name: 'User 5', image: 'https://placekitten.com/30/30', group: 'group2', tasks: [] },
  //   { name: 'User 6', image: 'https://placekitten.com/30/30', group: 'group2', tasks: [] },
  //   { name: 'User 7', image: 'https://placekitten.com/30/30', group: 'group3', tasks: [] },
  //   { name: 'User 8', image: 'https://placekitten.com/30/30', group: 'group3', tasks: [] },
  //   { name: 'User 9', image: 'https://placekitten.com/30/30', group: 'group3', tasks: [] },
  //   { name: 'User 10', image: 'https://placekitten.com/30/30', group: 'group3', tasks: [] },
  // ];

  user: any = [
    {
        "name": "Canada",
        "image": "../assets/image/canada-flag.png",
        "group": "group1",
        "isGroupItem": true,
        "tasks":[]
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
                "endDate": "2024-02-11T17:02:20.018Z"
            },
            {
                "name": "Validate",
                "color": "#33FF57",
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
                "color": "#F0F0FF",
                "startDate": "2024-02-14T17:02:20.018Z",
                "endDate": "2024-02-18T17:02:20.018Z"
            }
        ]
    },
    
    {
        "name": "United States of America",
        "image": "../assets/image/canada-flag.png",
        "group": "group2",
        "isGroupItem": true,
        "tasks": [ ]
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
                "color": "#33FF57",
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
                "color": "#F0F0FF",
                "startDate": "2024-02-14T17:02:20.018Z",
                "endDate": "2024-02-18T17:02:20.018Z"
            }
        ]
    },
];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const today = new Date();
console.log("today = ", today.toString().split(' ')[0]);
    // Calculate the date range
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 6);

    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 7);

    this.days = Array.from({ length: 14 }, (_, i) => this.getFormattedDate(i, startDate));
    console.log("days: "+this.days);
    
    this.dataSource = this.user.map((user:any) => ({
      ...user,
      // tasks: generateRandomTasks(startDate, endDate, user),
    }));
    console.log(this.dataSource);
  }

  getFormattedDate(offset: number, startDate: Date): string {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + offset);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  }

  // src/app/user-table/user-table.component.ts
  isTaskOnDay(task: any, day: string): boolean {
    // console.log("id = ",document.getElementById('container'));
    // let id: any = document.getElementById('container');
    let element: any = document.querySelector('[id^="event_"]');
    console.log("id = ",element?.id);
   
    this.count = this.count + 1;
    const taskStartDate = new Date(task.startDate).toDateString();
    const taskEndDate = new Date(task.endDate).toDateString();

    // console.log("taskStartDate = ",taskStartDate); //Mon Feb 05 2024
    // console.log("taskEndDate = ",taskEndDate); //Thu Feb 08 2024

    //"startDate": "2024-02-09T17:02:20.018Z",
   // "endDate": "2024-02-13T17:02:20.018Z" Tue Feb 13 2024
    if(element?.id) {
       // element.style.borderRadius = '20px 20px 20px 20px';
        if(taskStartDate == 'Fri Feb 09 2024') {
            console.log(taskEndDate," inside taskStartDate -------------", taskStartDate)
            // element.style.borderRadius = '20px 0 0 20px';
            element.classList.add("leftEvent");
            this.showTask = false;
        } 
        if(taskEndDate == 'Sun Feb 11 2024') {
            console.log(taskEndDate," inside taskEndDate -------------", taskStartDate)
            //element.style.borderRadius = '0 20px 20px 0';
            element.classList.add("rightEvent");
        }
    }
    // let td = document.getElementById('cell');
    // if(td) {
    //     td.setAttribute('colspan', '4');
    // }
    return (new Date(day).toDateString() >= taskStartDate && new Date(day).toDateString() <= taskEndDate);
  }

  allDayEvent(user: any) {
    console.log("user = ",user)
  }

  isEventSpanningMultipleDays(event:any) {
    const taskStartDate: any = new Date(event.startDate);
    const taskEndDate: any = new Date(event.endDate);

     const dayDiff = Math.ceil((taskEndDate - taskStartDate) / (1000*60*60*24))

    const container = document.getElementById('container');
    const eventElement = document.createElement('div');
    const containerWidth = container?.offsetWidth;

    const percentStart = (taskStartDate.getDate() - 1) / new Date(taskStartDate.getFullYear(), taskStartDate.getMonth() + 1, 0).getDate() * 100;
    const percentWidth = (dayDiff + 1) / new Date(taskStartDate.getFullYear(), taskStartDate.getMonth() + 1, 0).getDate() * 100;
    
    eventElement.style.left = percentStart + '%';
    eventElement.style.width = percentWidth + '%';
    eventElement.className = 'newEvent';
    eventElement.textContent = 'Collaberate';
    container?.appendChild(eventElement);
  }

// isEventSpanningMultipleDays(taskGroup: any[]): number {
//     const taskStartDate: any = new Date(taskGroup[0].startDate);
//     const taskEndDate: any = new Date(taskGroup[0].endDate);

//     const dayDiff = Math.ceil((taskEndDate - taskStartDate) / (1000*60*60*24))

//     return (dayDiff / 7) * 100;
//   }


  groupTasks(tasks: any[]): any[][] {
    //Group tasks by name for a specific user
    const groupedTasks: any[][] = [];
    const groups = new Map();
    for (const task of tasks) {
        const key = task.name;
        if(!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(task);
    }
    groups.forEach((group) => {
        groupedTasks.push(group);
    });
    
    return groupedTasks;
    }

  isWeekend(date: any) : boolean {
    const dayOfWeek = new Date(date).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
}

calculateRulerPosition(day: any): boolean {
    const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    return (day == currentDate);
}

}

function generateRandomTasks(startDate: Date, endDate: Date, user:any): any[] {
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

  console.log(user, tasks);
  return tasks;
}


