import { Component, ElementRef, Inject, OnInit, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { EncriptionService } from '../../Service/encription.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { CommonService } from "../../Service/common.service";
import { CustomValidators } from "ng2-validation";
import * as moment from "moment";

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {

  firstFormGroupbirthday: FormGroup;
  firstFormGroupmeeting: FormGroup;
  firstFormGrouppolicy: FormGroup;

  updaterecord = false;
  modelheader = 'Create Reminder';
  anychangesinrecord = false;
  constructor(private dialogRef: MatDialogRef<CreateNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder, private common: CommonService) { }

  ngOnInit() {

    this.firstFormGroupbirthday = this.fb.group({
      Id: [0],
      UserId: [0],
      BirthdayPersonName: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern("^[a-zA-Z ]+$"),
        ],
      ],
      DOBdate: ["", [Validators.required]],
      ReminderDateTime: ["", [Validators.required]],
      Notes: [""],
      Status: [""],
      CreateDate: [""],
      UpdateDate: [""],
    });

    this.firstFormGroupmeeting = this.fb.group({
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

    this.createNew();
  }

  createNew() {
    if (this.data.type == 'Birthday') {
      this.modelheader = 'Create Birthday Reminder';
      if (this.data.val != null) {
        this.EditBirthdayRecord(this.data.val);
      }
    } else if (this.data.type == 'Meeting') {
      this.modelheader = 'Create Meeting Reminder';
      if (this.data.val != null) {
        this.EditMeetingRecord(this.data.val);
      }
    } else {
      this.modelheader = 'Create Policy Reminder';
      if (this.data.val != null) {
        this.EditMeetingRecord(this.data.val);
      }
    }
  }

  get firtsFormbirthday() {
    return this.firstFormGroupbirthday.controls;
  }
  CreateBirthdayReminder() {
    let submitdata: any = {};
    submitdata.reminderId = null;
    submitdata.userId = localStorage.getItem("UserID")
    submitdata.bdayHolderName = this.firstFormGroupbirthday.value.BirthdayPersonName;
    submitdata.dobDate = this.firstFormGroupbirthday.value.DOBdate;
    submitdata.reminderType = 1;
    submitdata.reminderDateTime = this.firstFormGroupbirthday.value.ReminderDateTime;
    submitdata.notes = this.firstFormGroupbirthday.value.Notes;

    this.common.PostMethod(`Birth_PolicyReminder`, submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
        this.ResetBirthday();
        this.anychangesinrecord = true;
        this.closeModal();
        this.updaterecord = false;
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !", y.error.message);
    });
  }

  EditBirthdayRecord(val) {
    this.updaterecord = true;
    this.modelheader = 'Update Birthday Reminder'
    this.firtsFormbirthday.Id.setValue(val.reminderId);
    this.firtsFormbirthday.UserId.setValue(val.userId);
    this.firtsFormbirthday.BirthdayPersonName.setValue(val.bdayHolderName);
    if (val.dobDate != null) {
      this.firtsFormbirthday.DOBdate.setValue(val.dobDate.split("T")[0]);
    } else {
      this.firtsFormbirthday.DOBdate.setValue(null);
    }
    if (val.reminderDateTime != null) {
      this.firtsFormbirthday.ReminderDateTime.setValue(val.reminderDateTime.split(".")[0]);
    } else {
      this.firtsFormbirthday.ReminderDateTime.setValue(null);
    }
    this.firtsFormbirthday.Status.setValue(val.reminderStatus);
    this.firtsFormbirthday.Notes.setValue(val.notes);
    this.firtsFormbirthday.CreateDate.setValue(val.createDate);
    this.firtsFormbirthday.UpdateDate.setValue(val.updateDate);
  }

  UpdateBirthdayReminder() {
    let submitdata: any = {};
    submitdata.reminderId = this.firstFormGroupbirthday.value.Id;
    submitdata.userId = this.firstFormGroupbirthday.value.UserId;
    submitdata.bdayHolderName = this.firstFormGroupbirthday.value.BirthdayPersonName;
    submitdata.dobDate = this.firstFormGroupbirthday.value.DOBdate;
    submitdata.reminderType = 1;
    submitdata.reminderDateTime = this.firstFormGroupbirthday.value.ReminderDateTime;
    submitdata.notes = this.firstFormGroupbirthday.value.Notes;

    this.common.PutMethod(`Birth_PolicyReminder/${submitdata.userId}`, submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
        this.ResetBirthday();
        this.anychangesinrecord = true;
        this.closeModal();
        this.updaterecord = false;
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !", y.error.message);
    });

  }

  ResetBirthday() {
    this.firstFormGroupbirthday.controls["Id"].setValue(0);
    this.firstFormGroupbirthday.controls["UserId"].setValue(0);
    this.firstFormGroupbirthday.controls["BirthdayPersonName"].setValue("");
    this.firstFormGroupbirthday.controls["DOBdate"].setValue("");
    this.firstFormGroupbirthday.controls["ReminderDateTime"].setValue("");
    this.firstFormGroupbirthday.controls["Status"].setValue("");
    this.firstFormGroupbirthday.controls["Notes"].setValue("");
    this.firstFormGroupbirthday.controls["CreateDate"].setValue("");
    this.firstFormGroupbirthday.controls["UpdateDate"].setValue("");
    this.updaterecord = false;
    this.modelheader = 'Create Birthday Reminder'
  }

  //-------------meeting start
  get firtsFormM() {
    return this.firstFormGroupmeeting.controls;
  }

  CreateMeetingReminder() {
    let submitdata: any = {};
    submitdata.reminderId = null;
    submitdata.userId = localStorage.getItem("UserID")
    submitdata.bdayHolderName = this.firstFormGroupmeeting.value.MeetingTitle;
    submitdata.dobDate = this.firstFormGroupmeeting.value.MeetingDateTime;
    submitdata.reminderType = 11;
    submitdata.reminderDateTime = this.firstFormGroupmeeting.value.ReminderDateTime;

    submitdata.notes

    let meetingdetail = '';

    if (this.firstFormGroupmeeting.value.MeetingUrl) {
      meetingdetail += `MUrl*eql*${this.firstFormGroupmeeting.value.MeetingUrl}`;
    }

    if (this.firstFormGroupmeeting.value.MeetingId) {
      meetingdetail += `*dvd*MId*eql*${this.firstFormGroupmeeting.value.MeetingId}`;
    }

    if (this.firstFormGroupmeeting.value.MeetingUserId) {
      meetingdetail += `*dvd*MUId*eql*${this.firstFormGroupmeeting.value.MeetingUserId}`;
    }

    if (this.firstFormGroupmeeting.value.MeetingPassCode) {
      meetingdetail += `*dvd*MPC*eql*${this.firstFormGroupmeeting.value.MeetingPassCode}`;
    }

    if (this.firstFormGroupmeeting.value.Notes) {
      meetingdetail += `*dvd*ED*eql*${this.firstFormGroupmeeting.value.Notes}`;
    }
    // submitdata.notes = this.ency.encryptUsingAES256(meetingdetail);

    submitdata.notes = meetingdetail;

    //test.split('*dvd*')[0].split('*eql*');

    //submitdata.notes = this.firstFormGroupmeeting.value.Notes;

    this.common.PostMethod(`Birth_PolicyReminder`, submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
        this.ResetMeeting();
        this.anychangesinrecord = true;
        this.closeModal();
        this.updaterecord = false;
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !", y.error.message);
    });
  }

  EditMeetingRecord(val) {
    this.updaterecord = true;
    this.modelheader = 'Update Meeting Reminder'
    this.firtsFormM.Id.setValue(val.reminderId);
    this.firtsFormM.UserId.setValue(val.userId);
    this.firtsFormM.MeetingTitle.setValue(val.bdayHolderName);
    if (val.dobDate != null) {
      this.firtsFormM.MeetingDateTime.setValue(val.dobDate.split(".")[0]);
    } else {
      this.firtsFormM.MeetingDateTime.setValue(null);
    }
    if (val.reminderDateTime != null) {
      this.firtsFormM.ReminderDateTime.setValue(val.reminderDateTime.split(".")[0]);
    } else {
      this.firtsFormM.ReminderDateTime.setValue(null);
    }
    this.firtsFormM.Status.setValue(val.reminderStatus);
    // this.firtsFormM.Notes.setValue(val.notes);
    this.firtsFormM.CreateDate.setValue(val.createDate);
    this.firtsFormM.UpdateDate.setValue(val.updateDate);

    let meetingdetail = '';
    let detailarray = [];
    if (val.notes) {
      //meetingdetail = this.ency.decryptUsingAES256(val.notes).split('*dvd*');

      meetingdetail = val.notes.split('*dvd*');
      // meetingdetail.split('*dvd*');
      for (let i = 0; i < meetingdetail.length; i++) {
        let keyval: any = meetingdetail[i].split('*eql*');
        detailarray.push(JSON.parse(`{"${keyval[0]}" : "${keyval[1]}"}`));
      }
    }

    if (detailarray.length > 0) {
      //this.firstFormGroupmeeting.value.MeetingUrl = detailarray.filter(e=> Object.keys(e).toString() == Object.keys(f).toString())

      this.firtsFormM.MeetingUrl.setValue(detailarray.filter(e => Object.keys(e).toString() == 'MUrl')[0].MUrl);
      this.firtsFormM.MeetingId.setValue(detailarray.filter(e => Object.keys(e).toString() == 'MId')[0].MId);
      this.firtsFormM.MeetingUserId.setValue(detailarray.filter(e => Object.keys(e).toString() == 'MUId')[0].MUId);
      this.firtsFormM.MeetingPassCode.setValue(detailarray.filter(e => Object.keys(e).toString() == 'MPC')[0].MPC);
      this.firtsFormM.Notes.setValue(detailarray.filter(e => Object.keys(e).toString() == 'ED')[0].ED);
    }
  }

  getErrorMessage() {
    if (this.firtsFormM.MeetingTitle.hasError('required')) {
      return 'You must enter a value.';
    }
  }

  UpdateMeetingReminder() {
    let submitdata: any = {};
    submitdata.reminderId = this.firstFormGroupmeeting.value.Id;
    submitdata.userId = this.firstFormGroupmeeting.value.UserId;
    submitdata.bdayHolderName = this.firstFormGroupmeeting.value.MeetingTitle;
    submitdata.dobDate = this.firstFormGroupmeeting.value.MeetingDateTime;
    submitdata.reminderType = 11;
    submitdata.reminderDateTime = this.firstFormGroupmeeting.value.ReminderDateTime;

    let meetingdetail = '';

    if (this.firstFormGroupmeeting.value.MeetingUrl) {
      meetingdetail += `MUrl*eql*${this.firstFormGroupmeeting.value.MeetingUrl}`;
    }

    if (this.firstFormGroupmeeting.value.MeetingId) {
      meetingdetail += `*dvd*MId*eql*${this.firstFormGroupmeeting.value.MeetingId}`;
    }

    if (this.firstFormGroupmeeting.value.MeetingUserId) {
      meetingdetail += `*dvd*MUId*eql*${this.firstFormGroupmeeting.value.MeetingUserId}`;
    }

    if (this.firstFormGroupmeeting.value.MeetingPassCode) {
      meetingdetail += `*dvd*MPC*eql*${this.firstFormGroupmeeting.value.MeetingPassCode}`;
    }

    if (this.firstFormGroupmeeting.value.Notes) {
      meetingdetail += `*dvd*ED*eql*${this.firstFormGroupmeeting.value.Notes}`;
    }
    //submitdata.notes = this.ency.encryptUsingAES256(meetingdetail);

    submitdata.notes = meetingdetail;

    //test.split('*dvd*')[0].split('*eql*');

    // submitdata.notes = this.firstFormGroupmeeting.value.Notes;

    this.common.PutMethod(`Birth_PolicyReminder/${submitdata.userId}`, submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
        this.ResetMeeting();
        this.anychangesinrecord = true;
        this.closeModal();
        this.updaterecord = false;
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !", y.error.message);
    });
  }

  ResetMeeting() {
    this.firtsFormM.Id.setValue(0);
    this.firtsFormM.UserId.setValue(0);
    this.firtsFormM.MeetingTitle.setValue("");
    this.firtsFormM.MeetingUrl.setValue('');
    this.firtsFormM.MeetingId.setValue("");
    this.firtsFormM.MeetingUserId.setValue("");
    this.firtsFormM.MeetingPassCode.setValue("");

    this.firtsFormM.MeetingDateTime.setValue("");
    this.firtsFormM.ReminderDateTime.setValue("");
    this.firtsFormM.Status.setValue("");
    this.firtsFormM.Notes.setValue("");
    this.firtsFormM.CreateDate.setValue("");
    this.firtsFormM.UpdateDate.setValue("");
    this.updaterecord = false;
  }

  closeModal() {
    this.dialogRef.close({ Anychanges: this.anychangesinrecord });
  }

  createbirthday(val) {

  }





}
