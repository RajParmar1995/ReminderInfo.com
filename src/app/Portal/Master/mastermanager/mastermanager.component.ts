import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CommonService } from '../../Service/common.service';
import * as moment from "moment";

@Component({
  selector: 'app-mastermanager',
  templateUrl: './mastermanager.component.html',
  styleUrls: ['./mastermanager.component.css']
})
export class MastermanagerComponent implements OnInit {
  hide = true;
  lists:any={};
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(public common: CommonService, public fb: FormBuilder) { 
  this.InitFun();
  this.lists.branchlist = [];
  this.lists.UserTab = "UserList";
  this.lists.UserType = localStorage.getItem("UserType");
  this.GetBranchList();
  this.GetCitylist();
  this.GetAdminList();
  }

  ngOnInit() {
    // this.lists.Branchlist.paginator = this.paginator;
    // this.lists.Branchlist.sort  = this.sort;
    this.lists.branchlist.paginator = this.paginator;
    this.lists.branchlist.sort = this.sort;
  }
    InitFun()
    {
    this.lists.Branchlist = new MatTableDataSource();
    this.lists.displayedColumns = [ 'name', 'address', 'admin'];
  
  }
  
  
  applyFilter(filterValue: string) {
    this.lists.Branchlist.filter = filterValue.trim().toLowerCase();
  }

  AddBranch() {
    this.common.PostMethod("AddBranch", { name: this.lists.name, address: this.lists.address, userid: localStorage.getItem("UserId"), usertype: localStorage.getItem("UserType") }).then((res: any) => {
      if (res.Status == 1) {
        this.common.ToastMessage("Success", res.Message);
        this.GetBranchList()
        this.lists.name = "";
        this.lists.address = "";
      } else {
        this.common.ToastMessage("Fail", res.Message);

      }
    }).catch();
  }

  GetBranchList() {
    
    let userid: any = localStorage.getItem("UserId");
    if (localStorage.getItem("UserType") == 'Super Admin') {
      userid = 0;
    }
    if (this.lists.admin) {
      userid = this.lists.admin;
    }
    this.common.GetMethod("GetBranchlist?userid=" + userid).then((res: any) => {      
      this.lists.branchlist = new MatTableDataSource(res.Data);
      this.lists.branchlist.paginator = this.paginator;
      this.lists.branchlist.sort = this.sort;
    });
      
    
  }
  GetAdminList() {
    this.common.PostMethod("GetfilterData", { file: "users", name: "usertype", value: 'Admin' }).then((res: any) => {
      this.lists.adminlist = res.Data;
    }).catch(y => {
      console.log(y);
    });
  }
  GetCitylist() {
    this.common.GetMethod('GetCitites').then((res: any) => {
      this.lists.Citylist = res.Data;
    }).catch();
  }

}
