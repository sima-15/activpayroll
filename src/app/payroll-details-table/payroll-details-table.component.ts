import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-payroll-details-table',
  templateUrl: './payroll-details-table.component.html',
  styleUrls: ['./payroll-details-table.component.css']
})
export class PayrollDetailsTableComponent implements AfterViewInit{
  displayedColumns: string[] = ['country', 'payroll', 'date', 'stage', 'critical', 'overdue', 'due', 'querie'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

export interface PeriodicElement {
  country: string;
  payroll: string;
  date: string;
  stage: string;
  critical: number;
  overdue: number
  due: number;
  querie: number;
  // payroll: string;
  // country: number;
  // date: number;
  // stage: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {country: "CAN", payroll: 'Hydrogen', date: "29th March", stage: 'H', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "CAN", payroll: 'Helium', date: "29th March", stage: 'He', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "CAN", payroll: 'Lithium', date: "29th March", stage: 'Li', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "CAN", payroll: 'Beryllium', date: "29th March", stage: 'Be', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "CAN", payroll: 'Boron', date: "29th March", stage: 'B', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "CAN", payroll: 'Carbon', date: "29th March", stage: 'C', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "CAN", payroll: 'Nitrogen', date: "29th March", stage: 'N', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "CAN", payroll: 'Oxygen', date: "29th March", stage: 'O', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "CAN", payroll: 'Fluorine', date: "29th March", stage: 'F', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "CAN", payroll: 'Neon', date: "29th March", stage: 'Ne', critical: 1, overdue: 1, due:1, querie: 1},
];