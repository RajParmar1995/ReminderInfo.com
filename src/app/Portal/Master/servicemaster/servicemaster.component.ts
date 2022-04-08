import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'app-servicemaster',
  templateUrl: './servicemaster.component.html',
  styleUrls: ['./servicemaster.component.css']
})
export class ServicemasterComponent implements OnInit {
  hide = true;
  lists:any={};
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    this.InitFun();
  this.GetServiceList();
   }

   ngOnInit() {
    this.lists.Servicelist.paginator = this.paginator;
    this.lists.Servicelist.sort  = this.sort;

  }
    InitFun()
    {
    this.lists.Servicelist = new MatTableDataSource();
    this.lists.Servicelist = new MatTableDataSource([{name: 'Shubham', Branchname: 'abc'},{name: 'Shubham', Branchname: 'abc'}])
    this.lists.displayedColumns = ['sname', 'pname'];
  }
  GetServiceList(){

  }

}
