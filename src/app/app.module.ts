import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActpayUpcomingComponent } from './actpay-upcoming/actpay-upcoming.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PayrollComponent } from './payroll/payroll.component';
import { MaterialModule } from './material.module';
import { PayrollDetailsTableComponent } from './payroll-details-table/payroll-details-table.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { DialogBoxComponent } from './shared/dialog-box/dialog-box.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    ActpayUpcomingComponent,
    HomeComponent,
    PayrollComponent,
    PayrollDetailsTableComponent,
    SchedulerComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    SchedulerModule,
    CdkDropList, 
    CdkDrag
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
