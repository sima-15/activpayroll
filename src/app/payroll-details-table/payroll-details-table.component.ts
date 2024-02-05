import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA } from '../models/payroll-table-details';
import { DialogBoxComponent } from '../shared/dialog-box/dialog-box.component';

@Component({
  selector: 'app-payroll-details-table',
  templateUrl: './payroll-details-table.component.html',
  styleUrls: ['./payroll-details-table.component.css']
})
export class PayrollDetailsTableComponent implements AfterViewInit{
  displayedColumns: string[] = ['country', 'payroll', 'date', 'stage', 'critical', 'overdue', 'due', 'querie', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog) {}

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openDialog(action: any,obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result.event == 'edit'){
        this.editPayroll(result.data);
      }
    });
  }

  editPayroll(row_obj: any){

  }
  removePayroll(row_obj: any){
    
  }
}


