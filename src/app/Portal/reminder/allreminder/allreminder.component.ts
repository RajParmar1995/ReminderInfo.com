import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../Service/common.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormControlName,
} from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import * as moment from "moment";
import { MatDialog,MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import {ReminderinfodailogComponent} from '../../Dailogbox/reminderinfodailog/reminderinfodailog.component';
import { MeetingdetailComponent } from '../../Dailogbox/meetingdetail/meetingdetail.component';

@Component({
  selector: 'app-allreminder',
  templateUrl: './allreminder.component.html',
  styleUrls: ['./allreminder.component.css']
})
export class AllreminderComponent implements OnInit {
  lists: any = {};
  isLinear = false;
  firstFormGroup: FormGroup;
  isOptional = false;
  isEditable = false;
  hide = true;
  hide1 = true;
  passworderrors = '';
  submitformdata = [];
  columwidth = 50;

  birthdaypersonlist = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ReminderTablelist = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator1: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort1: MatSort;

  meetinglist = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator2: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort2: MatSort;

  constructor(public common: CommonService) { }

  ngOnInit() {

    this.lists.displayedColumns = [
      "birthdaypersonname",
      "dobdate",
      "reminderdatetime",
      "notes",
      "createdate",
      "updateDate",
      "Status",
    ];
    this.birthdaypersonlist.paginator = this.paginator;
    this.birthdaypersonlist.sort = this.sort;

    this.lists.displayedColumns1 = [
      "InsuranceType",
      "PolicyHolder",
      "PolicyNumber",
      "SumInsuredAssured",
      "PremiumAmt",
      "MaturityDate",
      "ReminderDateTime",
      "Notes",
      "Status",
      "Action",
    ];
    this.ReminderTablelist.paginator = this.paginator1;
    this.ReminderTablelist.sort = this.sort1;

    this.lists.displayedColumns2 = [
      // "id",
      "meetingtitle",
      "meetingdatetime",
      "reminderdatetime",
      "notes",
      "createdate",
      "updateDate",
      "Status",
      "Action",
    ];
    this.meetinglist.paginator = this.paginator2;
    this.meetinglist.sort = this.sort2;
    
    
    this.GetbirthdayReminderList();
    this.GetpolicyReminderList();
    this.GetMeetingList();
  }

  GetbirthdayReminderList() {
    this.common.GetMethod(`Birth_PolicyReminder/Usreid,ReminderType?Usreid=${localStorage.getItem("UserID")}&ReminderType=1`).then((res: any) => {
      this.birthdaypersonlist = new MatTableDataSource(res);
    });
  }

  GetpolicyReminderList() {
    this.common
      .GetMethod(
        `Birth_PolicyReminder/Usreid,ReminderType?Usreid=${localStorage.getItem(
          "UserID"
        )}&ReminderType=2`
      )
      .then((res: any) => {
        console.table(res);
        this.ReminderTablelist = new MatTableDataSource(res);
      });
  }


  GetMeetingList() {
    this.common.GetMethod(`Birth_PolicyReminder/Usreid,ReminderType?Usreid=${localStorage.getItem("UserID")}&ReminderType=1`).then((res: any) => {
      this.meetinglist = new MatTableDataSource(res);
    });
  }

  UpdatereminderrStatus(val,type) {
    let submitdata: any = {};
    val.reminderStatus = !val.reminderStatus;
    submitdata.ReminderIdVal = val.reminderId;
    submitdata.status = val.reminderStatus;
    this.common.PatchMethod(`Birth_PolicyReminder/${submitdata.ReminderIdVal}`,submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
        if(type == 1){
          this.GetbirthdayReminderList();
        }else{
          this.GetpolicyReminderList();
        }
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !",y.error.message);
    });
  }
  
  ShowReminderAllDetail(val){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    //dialogConfig.panelClass='fullscreen-dialog',
    dialogConfig.height = "400px";
    dialogConfig.width = "1080px";
    //dialogConfig.height = "100vh";
    //dialogConfig.width = "100%";
    dialogConfig.data = {status:true,val};
    let dailog = this.common.dialog.open(ReminderinfodailogComponent,dialogConfig);
    dailog.afterClosed().subscribe(data => {

  })
  }

  showdetail(val){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component1";
    dialogConfig.height = "400px";
    dialogConfig.width = "500px";
    dialogConfig.data = {status:true,val};
    let dailog = this.common.dialog.open(MeetingdetailComponent,dialogConfig);
    dailog.afterClosed().subscribe(data => {

  })
  }
}
