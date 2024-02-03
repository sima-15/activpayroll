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

@NgModule({
  declarations: [
    AppComponent,
    ActpayUpcomingComponent,
    HomeComponent,
    PayrollComponent,
    PayrollDetailsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
