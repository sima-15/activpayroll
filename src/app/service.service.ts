import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalaryElement } from './payroll-auth-form/model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getList(){
    return this.http.get('../../assets/payroll-upcoming.json');
  }
  getSalaryComponents():Observable<SalaryElement[]>{
    return this.http.get<SalaryElement[]>('../assets/auth-form-data.json');
  }
}
