import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActpayUpcomingComponent } from './actpay-upcoming/actpay-upcoming.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'payroll', component: ActpayUpcomingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
