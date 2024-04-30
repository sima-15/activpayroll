import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActpayUpcomingComponent } from './actpay-upcoming/actpay-upcoming.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { PayrollAuthFormComponent } from './payroll-auth-form/payroll-auth-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
//import { SyncfusionSchedulerComponent } from './syncfusion-scheduler/syncfusion-scheduler.component';
import { UserViewComponent } from './user-view/user-view.component';
import { SyncfusionSchedulerComponent } from './syncfusion-scheduler/syncfusion-scheduler.component';

const routes: Routes = [
  {
    path: 'payroll_upcoming', component: ActpayUpcomingComponent
  },{
    path: 'payroll', component: PayrollComponent
  },
  {
    path: 'scheduler', component: SchedulerComponent
  },
  {
    path: 'authform', component: PayrollAuthFormComponent
  },
  {
    path: 'landing-page', component: LandingPageComponent
  },
  // {
  //   path: 'syncscheduler', component: SyncfusionSchedulerComponent
  // },
  {
    path: 'calender-view', component: UserViewComponent
  },
{
    path: 'syncscheduler', component: SyncfusionSchedulerComponent
  },
  { path: "**", redirectTo: "payroll" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
