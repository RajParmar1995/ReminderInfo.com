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
     // "Id",
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
    this.common.GetMethod(`Birth_PolicyReminder/Usreid,ReminderType?Usreid=${localStorage.getItem("UserID")}&ReminderType=2`).then((res: any) => {
      console.table(res);
      this.ReminderTablelist = new MatTableDataSource(res);
    });
  }

  get firtsForm() {
    return this.firstFormGroup.controls;
  }

  //Done
  CreateReminder() {
    let submitdata: any = {};
    submitdata.reminderId = null;
    submitdata.userId = localStorage.getItem("UserID");
    submitdata.bdayHolderName = this.firstFormGroup.value.BirthdayPersonName;
    submitdata.dobDate = null;
    submitdata.reminderDateTime = this.firstFormGroup.value.ReminderDateTime;
    submitdata.notes = this.firstFormGroup.value.Notes;
    submitdata.ReminderType = this.firstFormGroup.value.InsuranceType;
    submitdata.PolicyNumber = this.firstFormGroup.value.PolicyNumber;
    submitdata.PlanDescption = this.firstFormGroup.value.PlanDescption;
    submitdata.CompanyName = this.firstFormGroup.value.CompanyName;
    submitdata.SumInsuredAssured = this.firstFormGroup.value.SumInsuredAssured;
    submitdata.PremiumAmt = this.firstFormGroup.value.PremiumAmt;
    submitdata.PaymentCycle = this.firstFormGroup.value.PaymentCycle;
    submitdata.PolicyTermYear = this.firstFormGroup.value.PolicyTermYear;
    submitdata.StartDate = this.firstFormGroup.value.CommencementDate;
    submitdata.PaymentDueDate = this.firstFormGroup.value.PaymentDueDate;
    submitdata.MaturityDate = this.firstFormGroup.value.MaturityDate;

    this.common.PostMethod(`Birth_PolicyReminder`, submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
        this.ResetReminder();
        this.GetpolicyReminderList();
        this.updaterecord = false;
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !", y.error.message);
    });

  }

  //Done
  ResetReminder() {
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
    this.updaterecord = true;
    this.firstFormGroup.controls['Id'].setValue(val.id);
    this.firstFormGroup.controls['UserId'].setValue(val.userId);
    this.firstFormGroup.controls['InsuranceType'].setValue(parseInt(val.insuranceType));
    this.firstFormGroup.controls['PolicyHolder'].setValue(val.policyHolder);
    this.firstFormGroup.controls['PolicyNumber'].setValue(val.policyNumber);
    this.firstFormGroup.controls['PlanDescption'].setValue(val.planDescption);
    this.firstFormGroup.controls['CompanyName'].setValue(val.companyName);
    this.firstFormGroup.controls['SumInsuredAssured'].setValue(val.sumInsuredAssured);
    this.firstFormGroup.controls['PremiumAmt'].setValue(val.premiumAmt);
    this.firstFormGroup.controls['PaymentCycle'].setValue(val.paymentCycle);
    this.firstFormGroup.controls['PolicyTermYear'].setValue(val.policyTermYear);
    this.firstFormGroup.controls['CommencementDate'].setValue(val.commencementDate.split("T")[0]);
    this.firstFormGroup.controls['PaymentDueDate'].setValue(val.paymentDueDate.split("T")[0]);
    this.firstFormGroup.controls['MaturityDate'].setValue(val.maturityDate.split("T")[0]);
    this.firstFormGroup.controls['ReminderDateTime'].setValue(val.reminderDateTime.split(".")[0]);
    this.firstFormGroup.controls['Notes'].setValue(val.notes);
    this.firstFormGroup.controls['Status'].setValue(val.status);
    this.firstFormGroup.controls['CreateDate'].setValue(val.createDate);
    this.firstFormGroup.controls['UpdateDate'].setValue(val.updateDate);
  }

  //done
  UpdatepolicyReminderReminder() {
    let submitdata: any = {};
    submitdata.reminderId = this.firstFormGroup.value.Id;
    submitdata.userId = localStorage.getItem("UserID");
    submitdata.bdayHolderName = this.firstFormGroup.value.PolicyHolder;
    submitdata.dobDate = null;
    submitdata.reminderDateTime = this.firstFormGroup.value.ReminderDateTime;
    submitdata.notes = this.firstFormGroup.value.Notes;
    submitdata.ReminderType = this.firstFormGroup.value.InsuranceType;
    submitdata.PolicyNumber = this.firstFormGroup.value.PolicyNumber;
    submitdata.PlanDescption = this.firstFormGroup.value.PlanDescption;
    submitdata.CompanyName = this.firstFormGroup.value.CompanyName;
    submitdata.SumInsuredAssured = this.firstFormGroup.value.SumInsuredAssured;
    submitdata.PremiumAmt = this.firstFormGroup.value.PremiumAmt;
    submitdata.PaymentCycle = this.firstFormGroup.value.PaymentCycle;
    submitdata.PolicyTermYear = this.firstFormGroup.value.PolicyTermYear;
    submitdata.StartDate = this.firstFormGroup.value.CommencementDate;
    submitdata.PaymentDueDate = this.firstFormGroup.value.PaymentDueDate;
    submitdata.MaturityDate = this.firstFormGroup.value.MaturityDate;

    this.common.PostMethod(`Birth_PolicyReminder`, submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
        this.ResetReminder();
        this.GetpolicyReminderList();
        this.updaterecord = false;
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !", y.error.message);
    });

  }

  //Done
  UpdateCreatereminderrStatus(val) {
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

}
