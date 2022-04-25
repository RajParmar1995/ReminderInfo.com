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
      "id",
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
    // this.common.PostMethod("user/getuserlist",{ where:{},order:[['id','desc']],limit:1000,
    // }).then((res: any) => {
    //   this.birthdaypersonlist = new MatTableDataSource(res.data);
    // });

    this.BithdayDataArray = [
      {
        id: 1,
        userId: 1,
        name: "test",
        dobDate: new Date(),
        reminderDateTime: "12/12/2020",
        notes: "test ansbdjsad",
        createDate: new Date(),
        updateDate: "12/12/2020",
        status: true,
      },
    ];

    this.birthdaypersonlist = new MatTableDataSource(this.BithdayDataArray);
  }

  get firtsForm() {
    return this.firstFormGroup.controls;
  }
  CreateBirthdayReminder() {
    let submitdata: any = {};
    submitdata.id = 0;
    submitdata.userId = 0;
    submitdata.name = this.firstFormGroup.value.BirthdayPersonName;
    submitdata.dobDate = this.firstFormGroup.value.DOBdate;
    submitdata.reminderDateTime = this.firstFormGroup.value.ReminderDateTime;
    submitdata.notes = this.firstFormGroup.value.Notes;
    submitdata.createDate = moment();
    submitdata.updateDate = moment();
    submitdata.status = true;
    this.BithdayDataArray.push(submitdata);
    this.birthdaypersonlist = new MatTableDataSource(this.BithdayDataArray);
    // submitdata.fcm_id = localStorage.getItem("FCMID")
    // this.common.PostMethod("user/addnewuser", submitdata).then((res: any) => {
    //   if (res.status == 1) {
    //     this.common.ToastMessage("Success", res.message);
    //   } else {
    //     this.common.ToastMessage("Info", res.message);
    //   }
    // }).catch(y => {
    //   this.common.ToastMessage("Error !",y.error.message);
    // });
    this.ResetBirthday();
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

  EditBirthdayRecord(val) {
    this.updaterecord = true;
    this.firstFormGroup.controls["Id"].setValue(val.id);
    this.firstFormGroup.controls["UserId"].setValue(val.userId);
    this.firstFormGroup.controls["BirthdayPersonName"].setValue(val.name);
    this.firstFormGroup.controls["DOBdate"].setValue(this.ChnageDateFormate(val.dobDate));
    this.firstFormGroup.controls["ReminderDateTime"].setValue(this.ChnageDateTimeFormate(val.reminderDateTime));
    this.firstFormGroup.controls["Status"].setValue(val.status);
    this.firstFormGroup.controls["Notes"].setValue(val.notes);
    this.firstFormGroup.controls["CreateDate"].setValue(val.createdate);
    this.firstFormGroup.controls["UpdateDate"].setValue(val.updateDate);
  }

  UpdateBirthdayReminder() {
    let submitdata: any = {};
    submitdata.id = 0;
    submitdata.userId = 0;
    submitdata.name = this.firstFormGroup.value.BirthdayPersonName;
    submitdata.dobDate = this.firstFormGroup.value.DOBdate;
    submitdata.reminderDateTime = this.firstFormGroup.value.ReminderDateTime;
    submitdata.notes = this.firstFormGroup.value.Notes;
    submitdata.createDate = moment();
    submitdata.updateDate = moment();
    submitdata.status = true;
    this.BithdayDataArray.push(submitdata);
    this.birthdaypersonlist = new MatTableDataSource(this.BithdayDataArray);
    // submitdata.fcm_id = localStorage.getItem("FCMID")
    // this.common.PostMethod("user/addnewuser", submitdata).then((res: any) => {
    //   if (res.status == 1) {
    //     this.common.ToastMessage("Success", res.message);
    //   } else {
    //     this.common.ToastMessage("Info", res.message);
    //   }
    // }).catch(y => {
    //   this.common.ToastMessage("Error !",y.error.message);
    // });
    this.ResetBirthday();
    this.updaterecord = false;
  }

  UpdatereminderrStatus(val) {
    let submitdata: any = {};
    val.status = !val.status;
    submitdata.id = val.id;
    submitdata.userId = val.userId;
    submitdata.name = val.name;
    submitdata.dobDate = val.dobDate;
    submitdata.reminderDateTime = val.reminderDateTime;
    submitdata.status = val.status;
    submitdata.notes = val.notes;
    submitdata.createDate = val.createDate;
    submitdata.updateDate = val.updateDate;

    this.BithdayDataArray.push(submitdata);
    this.birthdaypersonlist = new MatTableDataSource(this.BithdayDataArray);
    this.firstFormGroup.controls["Status"].setValue(val.status);


  }

  DeleteBirthdayRecord(val) {
  }

  ChnageDateFormate(val) {
    if (val != null && val != "") {
      return new Date(val).toISOString().split("T")[0];
    }
    return null;
  }
  ChnageDateTimeFormate(val) {
    if (val != null && val != "") {
      return new Date(val).toISOString().split(".")[0];
    }
    return null;
  }
}
