import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CommonService } from '../../Service/common.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserdetailComponent } from '../../Dailogbox/userdetail/userdetail.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  lists: any = {};
  isLinear = false;
  userlistarray = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public common: CommonService,public dialog: MatDialog) {
    
  }

  ngOnInit() {
    //this.lists.SelectedIndex = 0;
    this.lists.displayedColumns = ['fstname', 'lstname', 'Uemail','Usrusername', 'Umobile', 'UlastLogin','Usrupdatedate', 'Ustatus',];
    this.userlistarray.paginator = this.paginator;
    this.userlistarray.sort = this.sort;
    this.GetUserList();
  }

  GetUserList(){
    this.common.GetMethod(`User/AdminuserId?AdminUserId=${localStorage.getItem("UserID")}`).then((res: any) => {
      this.userlistarray = new MatTableDataSource(res);
    });
  }

  UpdateUserStatus(val) {
    let submitdata: any = {};
    val.accountStatus = !val.accountStatus;
    submitdata.UserIdVal = val.userId;
    submitdata.status = val.accountStatus;
    this.common.PatchMethod(`User/${submitdata.userId}`,submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
        this.GetUserList();
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !",y.error.message);
    });
  }


  // UserProfileEdit(ev){

  // }

  // UserAllDetail(ev){
  //   let dailog = this.common.dialog.open(UserdetailComponent,{data:{status:true,ev}});
  //   dailog.afterClosed().subscribe(data => {

  //   });
  // }

  // GetUserList() {
  //   let UserId: any = 0;
  //   if (localStorage.getItem("UserType") != "Super Admin") {
  //     UserId = localStorage.getItem("UserId");
  //   }
  //   if (this.lists.adminid) {
  //     UserId = this.lists.adminid;
  //   }
  //   this.common.GetMethod("GetUserInfo?userid=" + UserId).then((res: any) => {
  //     this.Userlist = res.Data;
  //     this.Userlist.forEach(element => {
  //       element.adminid = parseInt(element.adminid);
  //       if (element.status == 0) {
  //         element.status = false;
  //       }
  //       if (element.status == 1) {
  //         element.status = true;
  //       }
  //       if (element.currentstatus == 0) {
  //         element.currentstatus = false;
  //       }
  //       if (element.currentstatus == 1) {
  //         element.currentstatus = true;
  //       }
  //     });
  //     this.newUserlist = new MatTableDataSource(this.Userlist);
  //     this.newUserlist.paginator = this.paginator;
  //     this.newUserlist.sort = this.sort;
  //   });
  // }
  // UpdateUserStatus(ev) {
  //   if (ev.status == false) {
  //     ev.status = 1;
  //   } else {
  //     ev.status = 0;
  //   }
  //   this.common.PostMethod("RecordUpdate", { file: "users", name: "id", value: ev.id, updatename: "status", updatevalue: ev.status }).then((res: any) => {
  //     if (res.Status == 1) {
  //       this.common.ToastMessage("Success", "User Status Change Successfully");
  //       this.GetUserList();
  //     } else {
  //       this.common.ToastMessage("Fail", "User Status Change Fail");
  //     }
  //   });
  // }

  // UpdateCurrentStatus(ev) {
  //   if (ev.currentstatus == false) {
  //     ev.currentstatus = 1;
  //   } else {
  //     ev.currentstatus = 0;
  //   }
  //   this.common.PostMethod("RecordUpdate", { file: "users", name: "id", value: ev.id, updatename: "currentstatus", updatevalue: ev.currentstatus }).then((res: any) => {
  //     if (res.Status == 1) {
  //       this.common.ToastMessage("Success", "User Current Login Status Change Successfully");
  //       this.GetUserList();
  //     } else {
  //       this.common.ToastMessage("Fail", "User Current Login Status Change Fail");
  //     }
  //   });
  // }

}

