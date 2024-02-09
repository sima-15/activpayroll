import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActpayUpcomingComponent } from './actpay-upcoming/actpay-upcoming.component';
import { HomeComponent } from './home/home.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { PayrollAuthFormComponent } from './payroll-auth-form/payroll-auth-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
