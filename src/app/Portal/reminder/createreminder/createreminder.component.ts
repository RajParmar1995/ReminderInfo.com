import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CommonService } from '../../Service/common.service';
import { CustomValidators } from 'ng2-validation';

const password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]));
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));
const Todatdate = new Date();

export interface state {
  code: string;
  name: string;
}

export interface bankdetailList {
  BankName: string;
  AccountNo: number;
  IFSCCode: string;
  AccountType: string;
}


@Component({
  selector: 'app-createreminder',
  templateUrl: './createreminder.component.html',
  styleUrls: ['./createreminder.component.css']
})
export class CreatereminderComponent implements OnInit {

  lists: any = {};


  isLinear = false;
  firstFormGroup: FormGroup;

  isOptional = false;
  isEditable = false;
  hide = true;
  hide1 = true;

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

      InsuranceType:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],
      PolicyHolder:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],
      PolicyNumber:['',[Validators.required,Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      PlanDescption:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      CompanyName:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],
      SumInsuredAssured:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      PremiumAmt:['',[Validators.required,Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      PaymentCycle:['',[Validators.required,Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      PolicyTermYear:['',[Validators.required,Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      CommencementDate:['',[Validators.required,Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      PaymentDueDate:['',[Validators.required,Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      MaturityDate:['',[Validators.required,Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      Notes:['',[Validators.required,Validators.minLength(0), Validators.maxLength(20), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],

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

  CreateUser() {
    let submitdata : any = {}
    submitdata.user_type = this.firstFormGroup.value.usertype,
    submitdata.name = this.firstFormGroup.value.firstname + ' ' + this.firstFormGroup.value.lastname,
    submitdata.mobile = this.firstFormGroup.value.mobnumber,
    submitdata.email = this.firstFormGroup.value.email,
    submitdata.password = this.firstFormGroup.value.confirmPassword,
    submitdata.fcm_id = localStorage.getItem("FCMID")

    this.common.PostMethod("user/addnewuser", submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !",y.error.message);
    });

  }





}
