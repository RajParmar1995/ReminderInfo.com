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
  selector: "app-createbirthday",
  templateUrl: "./createbirthday.component.html",
  styleUrls: ["./createbirthday.component.css"],
})
export class CreatebirthdayComponent implements OnInit {
  lists: any = {};
  firstFormGroup: FormGroup;
  BithdayDataArray: any = [];
  updaterecord = false;

  birthdaypersonlist = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public common: CommonService, public fb: FormBuilder) { }
  ngOnInit() {
    this.firstFormGroup = this.fb.group({
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

    this.lists.displayedColumns = [
      // "id",
      "birthdaypersonname",
      "dobdate",
      "reminderdatetime",
      "notes",
      "createdate",
      "updateDate",
      "Status",
      "Action",
    ];
    this.birthdaypersonlist.paginator = this.paginator;
    this.birthdaypersonlist.sort = this.sort;
    this.GetBirthdayList();
    this.updaterecord = false;
  }

  GetBirthdayList() {
    this.common.GetMethod(`Birth_PolicyReminder/Usreid,ReminderType?Usreid=${localStorage.getItem("UserID")}&ReminderType=1`).then((res: any) => {
      this.birthdaypersonlist = new MatTableDataSource(res);
    });
  }

  get firtsForm() {
    return this.firstFormGroup.controls;
  }
  CreateBirthdayReminder() {
    let submitdata: any = {};
    submitdata.reminderId = null;
    submitdata.userId = localStorage.getItem("UserID")
    submitdata.bdayHolderName = this.firstFormGroup.value.BirthdayPersonName;
    submitdata.dobDate = this.firstFormGroup.value.DOBdate;
    submitdata.reminderType = 1;
    submitdata.reminderDateTime = this.firstFormGroup.value.ReminderDateTime;
    submitdata.notes = this.firstFormGroup.value.Notes;

    this.common.PostMethod(`Birth_PolicyReminder`, submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
        this.ResetBirthday();
        this.GetBirthdayList();
    this.updaterecord = false;
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !",y.error.message);
    });
  }

  EditBirthdayRecord(val) {
    this.updaterecord = true;
    this.firtsForm.Id.setValue(val.reminderId);
    this.firtsForm.UserId.setValue(val.userId);
    this.firtsForm.BirthdayPersonName.setValue(val.bdayHolderName);
    if(val.dobDate != null){
      this.firtsForm.DOBdate.setValue(val.dobDate.split("T")[0]);
    }else{
      this.firtsForm.DOBdate.setValue(null);
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

  UpdateBirthdayReminder() {
    let submitdata: any = {};
    submitdata.reminderId = this.firstFormGroup.value.Id;
    submitdata.userId = this.firstFormGroup.value.UserId;
    submitdata.bdayHolderName = this.firstFormGroup.value.BirthdayPersonName;
    submitdata.dobDate = this.firstFormGroup.value.DOBdate;
    submitdata.reminderType = 1;
    submitdata.reminderDateTime = this.firstFormGroup.value.ReminderDateTime;
    submitdata.notes = this.firstFormGroup.value.Notes;

    this.common.PutMethod(`Birth_PolicyReminder/${submitdata.userId}`, submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
        this.ResetBirthday();
        this.GetBirthdayList();
    this.updaterecord = false;
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !",y.error.message);
    });

  }

  ResetBirthday() {
    this.firstFormGroup.controls["Id"].setValue(0);
    this.firstFormGroup.controls["UserId"].setValue(0);
    this.firstFormGroup.controls["BirthdayPersonName"].setValue("");
    this.firstFormGroup.controls["DOBdate"].setValue("");
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
        this.ResetBirthday();
        this.GetBirthdayList();
    this.updaterecord = false;
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !",y.error.message);
    });
  }

  DeleteBirthdayRecord(val) {
  }

  // ChnageDateFormate(val) {
  //   if (val != null && val != "") {
  //     return new Date(val).toLocaleString().split("T")[0];
  //   }
  //   return null;
  // }
  // ChnageDateTimeFormate(val) {
  //   if (val != null && val != "") {
  //     return new Date(val).toLocaleString().split(".")[0];
  //   }
  //   return null;
  // }
}
