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
  Userlist = [];
  usertypelistarray = []
  subscriptionplanarray = []
  userviewdata : any = {}

  isLinear = false;
  newUserlist = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public common: CommonService,public dialog: MatDialog) {
    this.lists.Doctype = [];
    if (localStorage.getItem("UserType") == 'Admin') {
      this.lists.usertype = "Agent";
    }
    // this.GetUsertype();
    // this.GetSubscriptionpan();
   // this.GetUserList();
  }

  ngOnInit() {
    this.lists.SelectedIndex = 0;
    //this.lists.displayedColumns = ['action', 'name', 'Branchname', 'mobile', 'usertype', 'PresentAmount', 'lastlogin', 'status', 'login'];
    this.lists.displayedColumns = ['id','user_type', 'name', 'email', 'mobile',  'profile_image','fcm_id','subscription_id','expire_date', 'crated_at', 'last_login_at', 'updatedAt', 'status','action'];
    this.newUserlist.paginator = this.paginator;
    this.newUserlist.sort = this.sort;
  }

  GetUserList(){
    this.common.PostMethod("user/getuserlist",{ where:{},order:[['id','desc']],limit:1000,
    }).then((res: any) => {
      this.newUserlist = new MatTableDataSource(res.data);
    });
  }


  UserProfileEdit(ev){

  }

  UserAllDetail(ev){
    let dailog = this.common.dialog.open(UserdetailComponent,{data:{status:true,ev}});
    dailog.afterClosed().subscribe(data => {

    });
  }

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

