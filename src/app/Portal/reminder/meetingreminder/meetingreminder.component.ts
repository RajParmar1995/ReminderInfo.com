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
import * as moment from "moment";

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

  meetinglist = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public common: CommonService, public fb: FormBuilder) { }
  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      Id: [0],
      UserId: [0],
      MeetingTitle: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern("^[a-zA-Z ]+$"),
        ],
      ],
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
    this.common.GetMethod(`Birth_PolicyReminder/Usreid,ReminderType?Usreid=${localStorage.getItem("UserID")}&ReminderType=1`).then((res: any) => {
      this.meetinglist = new MatTableDataSource(res);
    });
  }

  get firtsForm() {
    return this.firstFormGroup.controls;
  }
  CreateMeetingReminder() {
    let submitdata: any = {};
    submitdata.reminderId = null;
    submitdata.userId = localStorage.getItem("UserID")
    submitdata.bdayHolderName = this.firstFormGroup.value.MeetingTitle;
    submitdata.dobDate = this.firstFormGroup.value.MeetingDateTime;
    submitdata.reminderType = 1;
    submitdata.reminderDateTime = this.firstFormGroup.value.ReminderDateTime;
    submitdata.notes = this.firstFormGroup.value.Notes;

    this.common.PostMethod(`Birth_PolicyReminder`, submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
        this.ResetMeeting();
        this.GetMeetingList();
    this.updaterecord = false;
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !",y.error.message);
    });
  }

  EditMeetingRecord(val) {
    this.updaterecord = true;
    this.firtsForm.Id.setValue(val.reminderId);
    this.firtsForm.UserId.setValue(val.userId);
    this.firtsForm.MeetingTitle.setValue(val.bdayHolderName);
    if(val.dobDate != null){
      this.firtsForm.MeetingDateTime.setValue(val.dobDate.split(".")[0]);
    }else{
      this.firtsForm.MeetingDateTime.setValue(null);
    }
    if(val.reminderDateTime != null){
      this.firtsForm.ReminderDateTime.setValue(val.reminderDateTime.split(".")[0]);
    }else{
      this.firtsForm.ReminderDateTime.setValue(null);
    }
    this.firtsForm.Status.setValue(val.reminderStatus);
    this.firtsForm.Notes.setValue(val.notes);
    this.firtsForm.CreateDate.setValue(val.createDate);
    this.firtsForm.UpdateDate.setValue(val.updateDate);
  }

  UpdateMeetingReminder() {
    let submitdata: any = {};
    submitdata.reminderId = this.firstFormGroup.value.Id;
    submitdata.userId = this.firstFormGroup.value.UserId;
    submitdata.bdayHolderName = this.firstFormGroup.value.MeetingTitle;
    submitdata.dobDate = this.firstFormGroup.value.MeetingDateTime;
    submitdata.reminderType = 1;
    submitdata.reminderDateTime = this.firstFormGroup.value.ReminderDateTime;
    submitdata.notes = this.firstFormGroup.value.Notes;

    this.common.PutMethod(`Birth_PolicyReminder/${submitdata.userId}`, submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
        this.ResetMeeting();
        this.GetMeetingList();
    this.updaterecord = false;
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !",y.error.message);
    });

  }

  ResetMeeting() {
    this.firstFormGroup.controls["Id"].setValue(0);
    this.firstFormGroup.controls["UserId"].setValue(0);
    this.firstFormGroup.controls["MeetingTitle"].setValue("");
    this.firstFormGroup.controls["MeetingDateTime"].setValue("");
    this.firstFormGroup.controls["ReminderDateTime"].setValue("");
    this.firstFormGroup.controls["Status"].setValue("");
    this.firstFormGroup.controls["Notes"].setValue("");
    this.firstFormGroup.controls["CreateDate"].setValue("");
    this.firstFormGroup.controls["UpdateDate"].setValue("");
    this.updaterecord = false;
  }

  UpdatereminderrStatus(val) {
    let submitdata: any = {};
    val.reminderStatus = !val.reminderStatus;
    submitdata.ReminderIdVal = val.reminderId;
    submitdata.status = val.reminderStatus;
    this.common.PatchMethod(`Birth_PolicyReminder/${submitdata.ReminderIdVal}`,submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
        this.ResetMeeting();
        this.GetMeetingList();
    this.updaterecord = false;
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !",y.error.message);
    });
  }

  DeleteMeetingRecord(val) {
  }


}
