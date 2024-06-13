// src/app/user-table/user-table.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {
   
  currentUserName:string= 'Shweta Patil'

  ngOnInit(): void {
  }

  receiverData = [
    { time: '2024-05-19 11:35', msg: 'Hi', personID: 'Shweta Patil' },
    { time: '2024-05-20 11:35', msg: 'Hello', personID: 'Joseph' },
    { time: '2024-05-19 09:30', msg: 'This is an automated message This is an automated message This is an automated message', personID: 'Shweta Patil' },
    { msg: 'hi', time: 'Tue May 31 2024 09:30:58 GMT+0530', personID: 'Joseph' },
    { time: '2024-06-04 09:30', msg: 'This is an automated message ', personID: 'Shweta Patil' },];



  myMessage(text: string) {
    const messageObject: any = {};
    if (text.length) {
      this.inputText = text;
      messageObject.msg = this.inputText;
      messageObject.time = new Date();
      messageObject.personID = this.currentUserName
      this.receiverData.push(messageObject);
      this.inputText = '';
    }
  }

}