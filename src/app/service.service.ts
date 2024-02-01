import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getList(){
    return this.http.get('../../assets/payroll-upcoming.json');
  }
}
