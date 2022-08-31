import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../Service/common.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormControlName,
} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

const password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]));
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})

export class CreateuserComponent implements OnInit {

  lists: any = {};
  isLinear = false;
  firstFormGroup: FormGroup;
  isOptional = false;
  isEditable = false;
  hide = true;
  hide1 = true;
  passworderrors = '';
  submitformdata = [];
  columwidth = 50;
  useralredyexist = false;
  constructor(private _formBuilder: FormBuilder,public common: CommonService) {
  }
  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],
      username1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9 ]+$')]],
      dob: ['', [Validators.required]],
      mnumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$')]],
      password1: password,
      confirmPassword: confirmPassword,
    });

  }
  get firtsForm() {
    return this.firstFormGroup.controls;
  }

  ngAfterViewInit() {
    //this.firstFormGroup.reset();
   this.firstFormGroup.controls["username1"].setValue(null);
   this.firstFormGroup.controls["password1"].setValue(null);
  }

  onSubmit() {

    if (this.useralredyexist == true)
      return;


    let data={
      fname:this.firstFormGroup.value.firstname,
      lname:this.firstFormGroup.value.lastname,
      username:this.firstFormGroup.value.username1,
      dob:this.firstFormGroup.value.dob,
      mobile:this.firstFormGroup.value.mnumber,      
      email:this.firstFormGroup.value.email,      
      pass:this.firstFormGroup.value.confirmPassword,    
    }
    this.common.PostMethod("Auth/Register", data).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
        this.firstFormGroup.reset();
       }
    }).catch(y => {
      this.common.ToastMessage("Error !",y.error.message);
    });

  }

  checkUserName() {
    if (this.firstFormGroup.controls.username1.invalid){
      this.useralredyexist = false;
      return;
    }
      
    //this.firstFormGroup.controls.username1.value
    this.common.GetMethod(`Auth/CheckUsername?val=${this.firstFormGroup.controls.username1.value}`).then((res: any) => {
      if (res.status) {
        this.useralredyexist = false;
      } else {
        this.useralredyexist = true;
        this.common.ToastMessage("Error", res.message);
      }
    });
  }

}
