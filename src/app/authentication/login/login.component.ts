import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl
} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { CommonService } from '../../Portal/Service/common.service';
import { OtpComponent } from '../../Portal/Dailogbox/otp/otp.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  hide = true;
  lists: any = {};
  constructor(private fb: FormBuilder, private router: Router, public common: CommonService) {
    // if (!localStorage.getItem("FCMID")) {
    //   let ID: any = Math.floor(100000 + Math.random() * 900000);
    //   localStorage.setItem("FCMID", ID);
    // }
  }

  ngOnInit() {
    this.form = this.fb.group({
      mobile_email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    let data = [];
    let data1:any = [];

    data = this.form.value;

    // this.form.value.fcid = localStorage.getItem("FCMID");

    // this.router.navigate(["/"]);

    // if(!this.form.value.mobile_email.match(/^\d{10}$/)){
    //   this.form.addControl('email', new FormControl(this.form.value.mobile, Validators.required));
    //   this.form.removeControl('mobile');
    //   data = this.form.value;
    //   data1 = {"Email":this.form.value.email,"Upassword":this.form.value.password};
    // }else{
    //   this.form.addControl('mobile', new FormControl(this.form.value.email, Validators.required));
    //   this.form.removeControl('email');
    //   data = this.form.value;
    //   data1 = {"Mobile":this.form.value.mobile,"Upassword":this.form.value.password};
    // }

    data1 = {"mobile_email":this.form.value.mobile_email,"Upassword":this.form.value.password};

    this.common.LoginMethod(data1).then((res: any) => {
      if (res.status == 1) {
            window.localStorage.setItem('EmailID', res.email);
            window.localStorage.setItem('UserID', res.id);
            window.localStorage.setItem("URoleId", res.uroleId);
            window.localStorage.setItem("Token", res.token);
            this.common.ToastMessage("Success", res.message);
            setTimeout(()=>{
              this.router.navigate(["/"]);
            },1000)
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !",y.error.message);
    });
  }
}
