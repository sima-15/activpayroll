import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-actpay-upcoming',
  templateUrl: './actpay-upcoming.component.html',
  styleUrls: ['./actpay-upcoming.component.css']
})
export class ActpayUpcomingComponent implements OnInit{
  dataList!: any;
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
}
