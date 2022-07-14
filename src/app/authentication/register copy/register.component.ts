import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../Portal/Service/common.service';
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  lists: any = {};
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isOptional = false;
  isEditable = false;
  hide = true;
  hide1 = true;
  userTtypelist = [{id:"1", name: "Individual" }, { id:"2", name: "Corporate"}]; 
  passworderrors = '';
  submitformdata = [];
  statearray = [];
  cityarray = [];
  cityarraycors =[];
  statevalue = '';
  SubPlans =[];
  constructor(private _formBuilder: FormBuilder,public common: CommonService) {
  }
  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      usertype: ['', Validators.required],
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],
      mnumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: password,
      confirmPassword: confirmPassword,
    });
    this.secondFormGroup = this._formBuilder.group({
      perAddress: ['', Validators.required],
      perState: ['', Validators.required],
      perCity: ['', Validators.required],
      perPincode : ['', [Validators.required, Validators.maxLength(6), Validators.min(100000), Validators.max(999999)]],
      corresAddress: ['', Validators.required],
      corresState: ['', Validators.required],
      corresCity: ['', Validators.required],
      corresPincode : ['', [Validators.required, Validators.maxLength(6), Validators.min(100000), Validators.max(999999)]],
    });
    this.thirdFormGroup = this._formBuilder.group({
      Subscriptionplan: ['', Validators.required],
    });

  
  }
  get firtsForm() {
    return this.firstFormGroup.controls;
  }
  get secondForm() {
    return this.secondFormGroup.controls;
  }

  AddressCopy(e) {
    if (e.checked) {
      this.secondFormGroup.controls['corresAddress'].setValue(this.secondFormGroup.value.perAddress);
      this.secondFormGroup.controls['corresState'].setValue(this.secondFormGroup.value.perState);
      this.secondFormGroup.controls['corresCity'].setValue(this.secondFormGroup.value.perCity);
      this.secondFormGroup.controls['corresPincode'].setValue(this.secondFormGroup.value.perPincode);
    } else {
      this.secondFormGroup.controls['corresAddress'].setValue('');
      this.secondFormGroup.controls['corresState'].setValue('');
      this.secondFormGroup.controls['corresCity'].setValue('');
      this.secondFormGroup.controls['corresPincode'].setValue('');
    }
  }
  

  onSubmit() {
    let data={
      user_type:this.firstFormGroup.value.usertype,
      name:this.firstFormGroup.value.firstname+' '+this.firstFormGroup.value.lastname,
      mobile:this.firstFormGroup.value.mnumber,
      email:this.firstFormGroup.value.email,
      password:this.firstFormGroup.value.confirmPassword,
      address:[
        {
        address:this.secondFormGroup.value.perAddress,
        state_id:this.secondFormGroup.value.perState,
        city_id:this.secondFormGroup.value.perCity,
        pincode:this.secondFormGroup.value.perPincode,
        address_type:0, 
        status:1
        },
        {
          address:this.secondFormGroup.value.corresAddress,
          state_id:this.secondFormGroup.value.corresState,
          city_id:this.secondFormGroup.value.corresCity,
          pincode:this.secondFormGroup.value.corresPincode,
          address_type:1, 
          status:1
          },
      ],
      
      subscription_id:parseInt(this.thirdFormGroup.value.Subscriptionplan),
      fcm_id:localStorage.getItem("FCMID")
    }
    this.common.PostMethod("auth/signup", data).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
       }
    }).catch(y => {
      this.common.ToastMessage("Error !",y.error.message);
    });

  }
}
