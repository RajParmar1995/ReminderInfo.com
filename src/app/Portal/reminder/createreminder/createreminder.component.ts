import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CommonService } from '../../Service/common.service';
import { CustomValidators } from 'ng2-validation';
import * as moment from 'moment';

@Component({
  selector: 'app-createreminder',
  templateUrl: './createreminder.component.html',
  styleUrls: ['./createreminder.component.css']
})
export class CreatereminderComponent implements OnInit {

  lists: any = {};
  columwidth = 25;
  firstFormGroup: FormGroup;

  ReminderDataArray: any = [];
  updaterecord = false;

  ReminderTablelist = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public common: CommonService, public fb: FormBuilder) {

  }
  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      // firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],
      // lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],
      // mobnumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      // email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // password: password,
      // confirmPassword: confirmPassword,
      Id: [0],
      UserId: [0],
      InsuranceType: ['', [Validators.required]],
      PolicyHolder: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],
      PolicyNumber: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      PlanDescption: ['', [Validators.required]],
      CompanyName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],
      SumInsuredAssured: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      PremiumAmt: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      PaymentCycle: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      PolicyTermYear: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      CommencementDate: ['', [Validators.required]],
      PaymentDueDate: ['', [Validators.required]],
      MaturityDate: ['', [Validators.required]],
      ReminderDateTime: ['', [Validators.required]],
      Notes: [''],
      Status: [""],
      CreateDate: [""],
      UpdateDate: [""],

    });

    this.lists.displayedColumns = [
      "Id",
      "InsuranceType",
      "PolicyHolder",
      "PolicyNumber",
      "PlanDescption",
      "CompanyName",
      "SumInsuredAssured",
      "PremiumAmt",
      "PaymentCycle",
      "PolicyTermYear",
      "CommencementDate",
      "PaymentDueDate",
      "MaturityDate",
      "ReminderDateTime",
      "Notes",
      "Status",
      "CreateDate",
      "UpdateDate",
      "Action"
    ];
    this.ReminderTablelist.paginator = this.paginator;
    this.ReminderTablelist.sort = this.sort;
    this.GetpolicyReminderList();
    this.updaterecord = false;
  }

  GetpolicyReminderList() {
    // this.common.PostMethod("user/getuserlist",{ where:{},order:[['id','desc']],limit:1000,
    // }).then((res: any) => {
    //   this.ReminderTablelist = new MatTableDataSource(res.data);
    // });

    this.ReminderDataArray = [
      {
        id: 1,
        userId: 1,
        insuranceType: 1,
        policyHolder: "rajkumar",
        policyNumber: 123123,
        planDescption: "vehicle number",
        companyName: "indian insurance",
        sumInsuredAssured: 20000,
        premiumAmt: 2000,
        paymentCycle: 3,
        policyTermYear: 1,
        commencementDate: "12/01/2021",
        paymentDueDate: "12/01/2021",
        maturityDate: "12/01/2022",
        reminderDateTime: "12/12/2022",
        notes: "test ansbdjsad",
        createDate: new Date(),
        updateDate: "12/12/2020",
        status: true,
      },
      {
        id: 1,
        userId: 1,
        insuranceType: 2,
        policyHolder: "raj",
        policyNumber: 123123,
        planDescption: "vehicle number",
        companyName: "indian insurance",
        sumInsuredAssured: 20000,
        premiumAmt: 2000,
        paymentCycle: 12,
        policyTermYear: 1,
        commencementDate: "12/01/2021",
        paymentDueDate: "12/01/2021",
        maturityDate: "12/01/2022",
        reminderDateTime: "12/12/2022",
        notes: "test ansbdjsad",
        createDate: new Date(),
        updateDate: "12/12/2020",
        status: true,
      },
    ];

    this.ReminderTablelist = new MatTableDataSource(this.ReminderDataArray);
  }

  get firtsForm() {
    return this.firstFormGroup.controls;
  }

  //Done
  CreateReminder() {
    debugger
    let submitdata: any = {}
    submitdata.id = 1;
    submitdata.userId = 1;
    submitdata.insuranceType = this.firstFormGroup.value.InsuranceType,
      submitdata.policyHolder = this.firstFormGroup.value.PolicyHolder,
      submitdata.policyNumber = this.firstFormGroup.value.PolicyNumber,
      submitdata.planDescption = this.firstFormGroup.value.PlanDescption,
      submitdata.companyName = this.firstFormGroup.value.CompanyName,
      submitdata.sumInsuredAssured = this.firstFormGroup.value.SumInsuredAssured,
      submitdata.premiumAmt = this.firstFormGroup.value.PremiumAmt,
      submitdata.paymentCycle = this.firstFormGroup.value.PaymentCycle,
      submitdata.policyTermYear = this.firstFormGroup.value.PolicyTermYear,
      submitdata.commencementDate = this.firstFormGroup.value.CommencementDate,
      submitdata.paymentDueDate = this.firstFormGroup.value.PaymentDueDate,
      submitdata.maturityDate = this.firstFormGroup.value.MaturityDate,
      submitdata.reminderDateTime = this.firstFormGroup.value.ReminderDateTime,
      submitdata.status = this.firstFormGroup.value.Status,
      submitdata.notes = this.firstFormGroup.value.Notes,
      submitdata.createdate = moment();
    submitdata.updateDate = moment();

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
    this.ResetReminder();
    this.updaterecord = false;

  }

  //Done
  ResetReminder() {
    debugger
    this.firstFormGroup.controls['Id'].setValue(0);
    this.firstFormGroup.controls['UserId'].setValue(0);
    this.firstFormGroup.controls['InsuranceType'].setValue(0);
    this.firstFormGroup.controls['PolicyHolder'].setValue('');
    this.firstFormGroup.controls['PolicyNumber'].setValue('');
    this.firstFormGroup.controls['PlanDescption'].setValue('');
    this.firstFormGroup.controls['CompanyName'].setValue('');
    this.firstFormGroup.controls['SumInsuredAssured'].setValue('');
    this.firstFormGroup.controls['PremiumAmt'].setValue('');
    this.firstFormGroup.controls['PaymentCycle'].setValue('');
    this.firstFormGroup.controls['PolicyTermYear'].setValue('');
    this.firstFormGroup.controls['CommencementDate'].setValue('');
    this.firstFormGroup.controls['PaymentDueDate'].setValue('');
    this.firstFormGroup.controls['MaturityDate'].setValue('');
    this.firstFormGroup.controls['ReminderDateTime'].setValue('');
    this.firstFormGroup.controls['Notes'].setValue('');
    this.firstFormGroup.controls['Status'].setValue('');
    this.firstFormGroup.controls['CreateDate'].setValue('');
    this.firstFormGroup.controls['UpdateDate'].setValue('');
  }

  //done
  EditpolicyReminderRecord(val) {
    debugger
    this.updaterecord = true;
    this.firstFormGroup.controls['Id'].setValue(val.id);
    this.firstFormGroup.controls['UserId'].setValue(val.userId);
    debugger
    this.firstFormGroup.controls['InsuranceType'].setValue(parseInt(val.insuranceType));
    this.firstFormGroup.controls['PolicyHolder'].setValue(val.policyHolder);
    this.firstFormGroup.controls['PolicyNumber'].setValue(val.policyNumber);
    this.firstFormGroup.controls['PlanDescption'].setValue(val.planDescption);
    this.firstFormGroup.controls['CompanyName'].setValue(val.companyName);
    this.firstFormGroup.controls['SumInsuredAssured'].setValue(val.sumInsuredAssured);
    this.firstFormGroup.controls['PremiumAmt'].setValue(val.premiumAmt);
    this.firstFormGroup.controls['PaymentCycle'].setValue(val.paymentCycle);
    this.firstFormGroup.controls['PolicyTermYear'].setValue(val.policyTermYear);
    this.firstFormGroup.controls['CommencementDate'].setValue(this.ChnageDateFormate(val.commencementDate));
    this.firstFormGroup.controls['PaymentDueDate'].setValue(this.ChnageDateFormate(val.paymentDueDate));
    this.firstFormGroup.controls['MaturityDate'].setValue(this.ChnageDateFormate(val.maturityDate));
    this.firstFormGroup.controls['ReminderDateTime'].setValue(this.ChnageDateTimeFormate(val.reminderDateTime));
    this.firstFormGroup.controls['Notes'].setValue(val.notes);
    this.firstFormGroup.controls['Status'].setValue(val.status);
    this.firstFormGroup.controls['CreateDate'].setValue(val.createDate);
    this.firstFormGroup.controls['UpdateDate'].setValue(val.updateDate);
  }

  //done
  UpdatepolicyReminderReminder() {
    debugger
    let submitdata: any = {};
    submitdata.id = this.firstFormGroup.value.Id;
    submitdata.userId = this.firstFormGroup.value.UserId;
    submitdata.insuranceType = this.firstFormGroup.value.InsuranceType;
    submitdata.policyHolder = this.firstFormGroup.value.PolicyHolder;
    submitdata.policyNumber = this.firstFormGroup.value.PolicyNumber;
    submitdata.planDescption = this.firstFormGroup.value.PlanDescption;
    submitdata.companyName = this.firstFormGroup.value.CompanyName;
    submitdata.sumInsuredAssured = this.firstFormGroup.value.SumInsuredAssured;
    submitdata.premiumAmt = this.firstFormGroup.value.PremiumAmt;
    submitdata.paymentCycle = this.firstFormGroup.value.PaymentCycle;
    submitdata.policyTermYear = this.firstFormGroup.value.PolicyTermYear;
    submitdata.commencementDate = this.firstFormGroup.value.CommencementDate;
    submitdata.paymentDueDate = this.firstFormGroup.value.PaymentDueDate;
    submitdata.maturityDate = this.firstFormGroup.value.MaturityDate;
    submitdata.reminderDateTime = this.firstFormGroup.value.ReminderDateTime;
    submitdata.notes = this.firstFormGroup.value.Notes;
    submitdata.status = this.firstFormGroup.value.Status;
    submitdata.createDate = this.firstFormGroup.value.CreateDate;;
    submitdata.updateDate = moment();


    this.ReminderDataArray.push(submitdata);
    this.ReminderTablelist = new MatTableDataSource(this.ReminderDataArray);
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
    this.ResetReminder();
    this.updaterecord = false;
  }

  //Done
  UpdateCreatereminderrStatus(val) {
    debugger
    let submitdata: any = {};
    val.status = !val.status;
    submitdata.id = val.id;
    submitdata.userId = val.userId;
    submitdata.insuranceType = val.insuranceType;
    submitdata.policyHolder = val.policyHolder;
    submitdata.policyNumber = val.policyNumber;
    submitdata.planDescption = val.planDescption;
    submitdata.companyName = val.companyName;
    submitdata.sumInsuredAssured = val.sumInsuredAssured;
    submitdata.premiumAmt = val.premiumAmt;
    submitdata.paymentCycle = val.paymentCycle;
    submitdata.policyTermYear = val.policyTermYear;
    submitdata.commencementDate = val.commencementDate;
    submitdata.paymentDueDate = val.paymentDueDate;
    submitdata.maturityDate = val.maturityDate;
    submitdata.reminderDateTime = val.reminderDateTime;
    submitdata.notes = val.notes;
    submitdata.status = val.status;
    submitdata.createDate = val.createDate;;
    submitdata.updateDate = moment();



    this.ReminderDataArray.push(submitdata);
    this.ReminderTablelist = new MatTableDataSource(this.ReminderDataArray);

  }

  //due
  DeletepolicyReminderRecord(val) {
  }

  ChnageDateFormate(val) {
    if (val != null && val != "") {
      return new Date(val).toLocaleString().split("T")[0];
    }
    return null;
  }
  ChnageDateTimeFormate(val) {
    if (val != null && val != "") {
      debugger
      return new Date(val).toLocaleString().split(".")[0];
      
    }
    return null;
  }




}
