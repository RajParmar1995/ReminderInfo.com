import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { CommonService } from "../../Service/common.service";
import { CustomValidators } from "ng2-validation";
import { EncriptionService } from '../../Service/encription.service';
import * as moment from "moment";
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { MeetingdetailComponent } from '../../Dailogbox/meetingdetail/meetingdetail.component';
import { CreateNewComponent } from "../../Dailogbox/create-new/create-new.component";

@Component({
  selector: 'app-meetingreminder',
  templateUrl: './meetingreminder.component.html',
  styleUrls: ['./meetingreminder.component.css']
})
export class MeetingreminderComponent implements OnInit {

  lists: any = {};
  firstFormGroup: FormGroup;
  BithdayDataArray: any = [];
  updaterecord = false;
  columnwidth30 = 33.33;
  columnwidth50 = 50;
  hide = true;

  meetinglist = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public common: CommonService, public fb: FormBuilder, private ency: EncriptionService) { }
  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      Id: [0],
      UserId: [0],

      MeetingTitle: ["", [Validators.required]],
      MeetingUrl: ["", [Validators.required]],
      MeetingId: [""],

      MeetingUserId: [""],
      MeetingPassCode: [""],

      MeetingDateTime: ["", [Validators.required]],
      ReminderDateTime: ["", [Validators.required]],
      Notes: [""],
      Status: [""],
      CreateDate: [""],
      UpdateDate: [""],
    });

    this.lists.displayedColumns = [
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
    this.meetinglist.paginator = this.paginator;
    this.meetinglist.sort = this.sort;
    this.GetMeetingList();
    this.updaterecord = false;
  }

  GetMeetingList() {
    this.common.GetMethod(`Birth_PolicyReminder/Usreid,ReminderType?Usreid=${localStorage.getItem("UserID")}&ReminderType=11`).then((res: any) => {
      this.meetinglist = new MatTableDataSource(res);
    });
  }

  showdetail(val) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "400px";
    dialogConfig.width = "500px";
    dialogConfig.data = { status: true, val };
    let dailog = this.common.dialog.open(MeetingdetailComponent, dialogConfig);
    dailog.afterClosed().subscribe(data => {

    })
  }

  get firtsForm() {
    return this.firstFormGroup.controls;
  }

  // CreateMeetingReminder() {
  //   let submitdata: any = {};
  //   submitdata.reminderId = null;
  //   submitdata.userId = localStorage.getItem("UserID")
  //   submitdata.bdayHolderName = this.firstFormGroup.value.MeetingTitle;
  //   submitdata.dobDate = this.firstFormGroup.value.MeetingDateTime;
  //   submitdata.reminderType = 11;
  //   submitdata.reminderDateTime = this.firstFormGroup.value.ReminderDateTime;

  //   submitdata.notes

  //   let meetingdetail = '';

  //   if (this.firstFormGroup.value.MeetingUrl) {
  //     meetingdetail += `MUrl*eql*${this.firstFormGroup.value.MeetingUrl}`;
  //   }

  //   if (this.firstFormGroup.value.MeetingId) {
  //     meetingdetail += `*dvd*MId*eql*${this.firstFormGroup.value.MeetingId}`;
  //   }

  //   if (this.firstFormGroup.value.MeetingUserId) {
  //     meetingdetail += `*dvd*MUId*eql*${this.firstFormGroup.value.MeetingUserId}`;
  //   }

  //   if (this.firstFormGroup.value.MeetingPassCode) {
  //     meetingdetail += `*dvd*MPC*eql*${this.firstFormGroup.value.MeetingPassCode}`;
  //   }

  //   if (this.firstFormGroup.value.Notes) {
  //     meetingdetail += `*dvd*ED*eql*${this.firstFormGroup.value.Notes}`;
  //   }
  //   // submitdata.notes = this.ency.encryptUsingAES256(meetingdetail);

  //   submitdata.notes = meetingdetail;

  //   //test.split('*dvd*')[0].split('*eql*');

  //   //submitdata.notes = this.firstFormGroup.value.Notes;

  //   this.common.PostMethod(`Birth_PolicyReminder`, submitdata).then((res: any) => {
  //     if (res.status == 1) {
  //       this.common.ToastMessage("Success", res.message);
  //       this.ResetMeeting();
  //       this.GetMeetingList();
  //       this.updaterecord = false;
  //     } else {
  //       this.common.ToastMessage("Info", res.message);
  //     }
  //   }).catch(y => {
  //     this.common.ToastMessage("Error !", y.error.message);
  //   });
  // }

  // EditMeetingRecord(val) {
  //   this.updaterecord = true;
  //   this.firtsForm.Id.setValue(val.reminderId);
  //   this.firtsForm.UserId.setValue(val.userId);
  //   this.firtsForm.MeetingTitle.setValue(val.bdayHolderName);
  //   if (val.dobDate != null) {
  //     this.firtsForm.MeetingDateTime.setValue(val.dobDate.split(".")[0]);
  //   } else {
  //     this.firtsForm.MeetingDateTime.setValue(null);
  //   }
  //   if (val.reminderDateTime != null) {
  //     this.firtsForm.ReminderDateTime.setValue(val.reminderDateTime.split(".")[0]);
  //   } else {
  //     this.firtsForm.ReminderDateTime.setValue(null);
  //   }
  //   this.firtsForm.Status.setValue(val.reminderStatus);
  //   // this.firtsForm.Notes.setValue(val.notes);
  //   this.firtsForm.CreateDate.setValue(val.createDate);
  //   this.firtsForm.UpdateDate.setValue(val.updateDate);

  //   let meetingdetail = '';
  //   let detailarray = [];
  //   if (val.notes) {
  //     //meetingdetail = this.ency.decryptUsingAES256(val.notes).split('*dvd*');

  //     meetingdetail = val.notes.split('*dvd*');
  //     // meetingdetail.split('*dvd*');
  //     for (let i = 0; i < meetingdetail.length; i++) {
  //       let keyval: any = meetingdetail[i].split('*eql*');
  //       detailarray.push(JSON.parse(`{"${keyval[0]}" : "${keyval[1]}"}`));
  //     }
  //   }

  //   if (detailarray.length > 0) {
  //     //this.firstFormGroup.value.MeetingUrl = detailarray.filter(e=> Object.keys(e).toString() == Object.keys(f).toString())

  //     this.firtsForm.MeetingUrl.setValue(detailarray.filter(e => Object.keys(e).toString() == 'MUrl')[0].MUrl);
  //     this.firtsForm.MeetingId.setValue(detailarray.filter(e => Object.keys(e).toString() == 'MId')[0].MId);
  //     this.firtsForm.MeetingUserId.setValue(detailarray.filter(e => Object.keys(e).toString() == 'MUId')[0].MUId);
  //     this.firtsForm.MeetingPassCode.setValue(detailarray.filter(e => Object.keys(e).toString() == 'MPC')[0].MPC);
  //     this.firtsForm.Notes.setValue(detailarray.filter(e => Object.keys(e).toString() == 'ED')[0].ED);
  //   }
  // }

  getErrorMessage() {
    if (this.firtsForm.MeetingTitle.hasError('required')) {
      return 'You must enter a value.';
    }
  }

  // UpdateMeetingReminder() {
  //   let submitdata: any = {};
  //   submitdata.reminderId = this.firstFormGroup.value.Id;
  //   submitdata.userId = this.firstFormGroup.value.UserId;
  //   submitdata.bdayHolderName = this.firstFormGroup.value.MeetingTitle;
  //   submitdata.dobDate = this.firstFormGroup.value.MeetingDateTime;
  //   submitdata.reminderType = 11;
  //   submitdata.reminderDateTime = this.firstFormGroup.value.ReminderDateTime;

  //   let meetingdetail = '';

  //   if (this.firstFormGroup.value.MeetingUrl) {
  //     meetingdetail += `MUrl*eql*${this.firstFormGroup.value.MeetingUrl}`;
  //   }

  //   if (this.firstFormGroup.value.MeetingId) {
  //     meetingdetail += `*dvd*MId*eql*${this.firstFormGroup.value.MeetingId}`;
  //   }

  //   if (this.firstFormGroup.value.MeetingUserId) {
  //     meetingdetail += `*dvd*MUId*eql*${this.firstFormGroup.value.MeetingUserId}`;
  //   }

  //   if (this.firstFormGroup.value.MeetingPassCode) {
  //     meetingdetail += `*dvd*MPC*eql*${this.firstFormGroup.value.MeetingPassCode}`;
  //   }

  //   if (this.firstFormGroup.value.Notes) {
  //     meetingdetail += `*dvd*ED*eql*${this.firstFormGroup.value.Notes}`;
  //   }
  //   //submitdata.notes = this.ency.encryptUsingAES256(meetingdetail);

  //   submitdata.notes = meetingdetail;

  //   //test.split('*dvd*')[0].split('*eql*');

  //   // submitdata.notes = this.firstFormGroup.value.Notes;

  //   this.common.PutMethod(`Birth_PolicyReminder/${submitdata.userId}`, submitdata).then((res: any) => {
  //     if (res.status == 1) {
  //       this.common.ToastMessage("Success", res.message);
  //       this.ResetMeeting();
  //       this.GetMeetingList();
  //       this.updaterecord = false;
  //     } else {
  //       this.common.ToastMessage("Info", res.message);
  //     }
  //   }).catch(y => {
  //     this.common.ToastMessage("Error !", y.error.message);
  //   });
  // }

  // ResetMeeting() {
  //   this.firtsForm.Id.setValue(0);
  //   this.firtsForm.UserId.setValue(0);
  //   this.firtsForm.MeetingTitle.setValue("");
  //   this.firtsForm.MeetingUrl.setValue('');
  //   this.firtsForm.MeetingId.setValue("");
  //   this.firtsForm.MeetingUserId.setValue("");
  //   this.firtsForm.MeetingPassCode.setValue("");

  //   this.firtsForm.MeetingDateTime.setValue("");
  //   this.firtsForm.ReminderDateTime.setValue("");
  //   this.firtsForm.Status.setValue("");
  //   this.firtsForm.Notes.setValue("");
  //   this.firtsForm.CreateDate.setValue("");
  //   this.firtsForm.UpdateDate.setValue("");
  //   this.updaterecord = false;
  // }

  createUpdateMeeting(type, val) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-componentcreate";
    if (type == 0) {
      val = null;
    }
    dialogConfig.data = { type: 'Meeting', val };
    let dailog = this.common.dialog.open(CreateNewComponent, dialogConfig);
    dailog.afterClosed().subscribe(data => {
      if(data.Anychanges == true){
        this.GetMeetingList();
      }
    })
  }

  UpdatereminderrStatus(val) {
    let submitdata: any = {};
    val.reminderStatus = !val.reminderStatus;
    submitdata.ReminderIdVal = val.reminderId;
    submitdata.status = val.reminderStatus;
    this.common.PatchMethod(`Birth_PolicyReminder/${submitdata.ReminderIdVal}`, submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
       // this.ResetMeeting();
        this.GetMeetingList();
        this.updaterecord = false;
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !", y.error.message);
    });
  }

  DeleteMeetingRecord(val) {
  }


}
