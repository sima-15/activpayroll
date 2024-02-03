import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActpayUpcomingComponent } from './actpay-upcoming/actpay-upcoming.component';
import { HomeComponent } from './home/home.component';
import { PayrollComponent } from './payroll/payroll.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'payroll_upcoming', component: ActpayUpcomingComponent
  },{
    path: 'payroll', component: PayrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
