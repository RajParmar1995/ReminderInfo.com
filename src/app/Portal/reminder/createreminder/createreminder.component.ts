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

  firstFormGroup: FormGroup;

  newUserlist = new MatTableDataSource();
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

      InsuranceType:['',[Validators.required]],
      PolicyHolder:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],

      PolicyNumber:['',[Validators.required,Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],

      PlanDescption:['',[Validators.required]],

      CompanyName:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],

      SumInsuredAssured:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],

      PremiumAmt:['',[Validators.required,Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],

      PaymentCycle:['',[Validators.required,Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],

      PolicyTermYear:['',[Validators.required,Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],

      CommencementDate:['',[Validators.required]],

      PaymentDueDate:['',[Validators.required]],

      MaturityDate:['',[Validators.required]],

      ReminderDateTime:['',[Validators.required]],

      Notes:[''],

    });
  }

  get firtsForm() {
    return this.firstFormGroup.controls;
  }

  // GetUserTypeMaster() {
  //   this.common.GetMethod('master/getmaster?master=role').then((res: any) => {
  //     if (res.status == 1) {
  //       this.usertypearray = res.data;
  //     }
  //   }).catch(y => {
  //     this.common.ToastMessage("Error !", y.error.message);
  //   });
  // }
  // GetSubscriptionMaster() {
  //   this.common.GetMethod('master/getmaster?master=subscriptionmaster').then((res: any) => {
  //     if (res.status == 1) {
  //       this.SubPlans = res.data;
  //     }
  //   }).catch(y => {
  //     this.common.ToastMessage("Error !", y.error.message);
  //   });
  // }
  // GetStates() {
  //   this.common.PostMethod("common/getstates", { id: 101 }).then((res: any) => {
  //     if (res.status == 1) {
  //       this.statearray = res.data;
  //     }
  //   }).catch(y => {
  //     this.common.ToastMessage("Error !", y.error.message);
  //   });
  // }

  // GetCity() {
  //   let stateid = this.secondFormGroup.value.perState;
  //   this.common.PostMethod("common/getcities", { id: stateid }).then((res: any) => {
  //     if (res.status == 1) {
  //       this.cityarray = res.data;
  //       this.cityarraycors = res.data;
  //     }
  //   }).catch(y => {
  //     this.common.ToastMessage("Error !", y.error.message);
  //   });
  // }

  CreateReminder() {
    debugger
    let submitdata : any = {}
     submitdata.InsuranceType = this.firstFormGroup.value.InsuranceType,
     submitdata.PolicyHolder = this.firstFormGroup.value.PolicyHolder,
     submitdata.PolicyNumber = this.firstFormGroup.value.PolicyNumber,
     submitdata.PlanDescption = this.firstFormGroup.value.PlanDescption,
     submitdata.CompanyName = this.firstFormGroup.value.CompanyName,
     submitdata.SumInsuredAssured = this.firstFormGroup.value.SumInsuredAssured,
     submitdata.PremiumAmt = this.firstFormGroup.value.PremiumAmt,
     submitdata.PaymentCycle = this.firstFormGroup.value.PaymentCycle,
     submitdata.PolicyTermYear = this.firstFormGroup.value.PolicyTermYear,
     submitdata.CommencementDate = this.firstFormGroup.value.CommencementDate,
     submitdata.PaymentDueDate = this.firstFormGroup.value.PaymentDueDate,
     submitdata.MaturityDate = this.firstFormGroup.value.MaturityDate,
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

  ResetReminder(){
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
  }





}
