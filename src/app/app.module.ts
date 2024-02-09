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
import { GenericTableComponent } from './shared/generic-table/generic-table.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingInnerCardComponent } from './landing-inner-card/landing-inner-card.component';
import { PayrollPulseDialogboxComponent } from './payroll-pulse-dialogbox/payroll-pulse-dialogbox.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ActpayUpcomingComponent,
    HomeComponent,
    PayrollComponent,
    PayrollDetailsTableComponent,
    SchedulerComponent,
    DialogBoxComponent,
    GenericTableComponent,
    LandingPageComponent,
    LandingInnerCardComponent,
    PayrollPulseDialogboxComponent
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
    CdkDrag,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
