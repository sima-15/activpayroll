import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-actpay-upcoming',
  templateUrl: './actpay-upcoming.component.html',
  styleUrls: ['./actpay-upcoming.component.css']
})
export class ActpayUpcomingComponent implements OnInit{
  dataList!: any;
  doneList!: string|CdkDropList<any>;
  constructor(private service: ServiceService){}
  ngOnInit(): void {
    this.getUpcomingList()
  }

  getUpcomingList(){
    this.service.getList().subscribe(res => {
      this.dataList = res
      console.log(this.dataList)
    })
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
