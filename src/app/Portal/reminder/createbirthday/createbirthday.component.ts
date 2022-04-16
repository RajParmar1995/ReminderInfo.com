import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CommonService } from '../../Service/common.service';
import { CustomValidators } from 'ng2-validation';
import * as moment from 'moment';

@Component({
  selector: 'app-createbirthday',
  templateUrl: './createbirthday.component.html',
  styleUrls: ['./createbirthday.component.css']
})
export class CreatebirthdayComponent implements OnInit {

  lists: any = {};
  firstFormGroup: FormGroup;

  birthdaypersonlist = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public common: CommonService, public fb: FormBuilder) {

  }
  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      BirthdayPersonName:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],
      DOBdate:['',[Validators.required]],
      ReminderDateTime:['',[Validators.required]],
      Notes:[''],
    });

    this.lists.displayedColumns = ['id','birthdaypersonname','dobdate','reminderdatetime','notes','createdate','updateDate'];
    this.birthdaypersonlist.paginator = this.paginator;
    this.birthdaypersonlist.sort = this.sort;

    this.GetUserList();
  }

  GetUserList(){
    // this.common.PostMethod("user/getuserlist",{ where:{},order:[['id','desc']],limit:1000,
    // }).then((res: any) => {
    //   this.birthdaypersonlist = new MatTableDataSource(res.data);
    // });

    let res = [
      {id:1,name:"test",dobdob:"12/12/2020",reimderdate:"12/12/2020",notes:"test ansbdjsad",createdate:"12/12/2020",updateDate:"12/12/2020"}
    ]

    this.birthdaypersonlist = new MatTableDataSource(res);
  }

  get firtsForm() {
    return this.firstFormGroup.controls;
  }
  CreateBirthdayReminder() {
    debugger
    let submitdata : any = {}
     submitdata.BirthdayPersonName = this.firstFormGroup.value.BirthdayPersonName,
     submitdata.DOBdate = this.firstFormGroup.value.DOBdate,
     submitdata.ReminderDateTime = this.firstFormGroup.value.ReminderDateTime,
     submitdata.Notes = this.firstFormGroup.value.Notes,
     submitdata.UserId = 1;
     submitdata.Createdate = moment();
     submitdata.UpdateDate = moment();
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
  }

  ResetBirthday(){
    this.firstFormGroup.controls['BirthdayPersonName'].setValue('');
    this.firstFormGroup.controls['DOBdate'].setValue('');
    this.firstFormGroup.controls['ReminderDateTime'].setValue('');
    this.firstFormGroup.controls['Notes'].setValue('');
  }



  }
