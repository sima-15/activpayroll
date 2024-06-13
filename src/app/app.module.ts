import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { ActpayUpcomingComponent } from './actpay-upcoming/actpay-upcoming.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingInnerCardComponent } from './landing-inner-card/landing-inner-card.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from './material.module';
import { PayrollAuthFormComponent } from './payroll-auth-form/payroll-auth-form.component';
import { PayrollDetailsTableComponent } from './payroll-details-table/payroll-details-table.component';
import { PayrollPulseDialogboxComponent } from './payroll-pulse-dialogbox/payroll-pulse-dialogbox.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { DialogBoxComponent } from './shared/dialog-box/dialog-box.component';
import { FilterComponent } from './shared/filter/filter.component';
import { SelectCheckAllComponent } from './shared/filter/select-check-all.component';
import { GenericTableComponent } from './shared/generic-table/generic-table.component';
import { SidenavComponent } from './side-navigation/side-navigation.component';
import { AgendaService, DayService, MonthAgendaService, MonthService, ScheduleModule, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { SyncfusionSchedulerComponent } from './syncfusion-scheduler/syncfusion-scheduler.component';
import { CalendarKanbanViewComponent } from './calendar-kanban-view/calendar-kanban-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ActpayUpcomingComponent,
    HomeComponent,
    PayrollComponent,
    PayrollDetailsTableComponent,
    PayrollAuthFormComponent,
    SchedulerComponent,
    DialogBoxComponent,
    GenericTableComponent,
    LandingPageComponent,
    LandingInnerCardComponent,
    PayrollPulseDialogboxComponent,
    FilterComponent,
    SidenavComponent,
    PayrollPulseDialogboxComponent,
    SelectCheckAllComponent,
    SyncfusionSchedulerComponent,
    CalendarKanbanViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    SchedulerModule,
    PDFModule,
    GridModule,
    DropDownsModule,
    DialogModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ButtonsModule,
    CdkDropList, 
    CdkDrag,
    ScheduleModule,
    TimePickerModule,
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
