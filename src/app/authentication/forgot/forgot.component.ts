import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { CommonService } from '../../Portal/Service/common.service';
import { OtpComponent } from '../../Portal/Dailogbox/otp/otp.component';
import { ChangepasswordComponent } from '../../Portal/Dailogbox/changepassword/changepassword.component';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  public form: FormGroup;
  lists: any = {};
  constructor(private fb: FormBuilder, private router: Router, public common: CommonService) { }

  ngOnInit() {
    this.form = this.fb.group({
      mobile: [
        null,
        Validators.compose([Validators.required, CustomValidators.number, Validators.maxLength(10), Validators.minLength(10)])
      ]
    });
  }

  onSubmit() {
    this.lists.Randomnumber = Math.floor(100000 + Math.random() * 900000);
    this.common.PostMethod("Checkuser", { mobile: this.form.value.mobile }).then((result: any) => {
      if (result.Status == 1) {
        this.common.PostMethod("SendOTP", { Mobile: this.form.value.mobile, OTP: this.lists.Randomnumber }).then((res: any) => {
          let dailog = this.common.dialog.open(OtpComponent, {
          });
          dailog.afterClosed().subscribe(data => {
            if (this.lists.Randomnumber == data) {
              this.common.ToastMessage("Success", "Please Enter New Password Successfully");
              let passChnage = this.common.dialog.open(ChangepasswordComponent, {});
              passChnage.afterClosed().subscribe(result => {
                if (result.Status) {
                  this.ChangePassword(result.Password);
                } else {
                  this.common.ToastMessage("Fail", "User Cancel Password Change");
                }
              })
            } else {
              this.common.ToastMessage("Fail", "OTP not match please try again.");
            }
          });
        });
      } else {
        this.common.ToastMessage("Fail", "Invalid User Please Contact Administrator");
      }
    });
  }
  ChangePassword(Password) {
    this.common.PostMethod("ForgotPassword", { mobile: this.form.value.mobile, password: Password }).then((res: any) => {
      if (res.Status == 1) {
        this.common.ToastMessage("Success", res.Message);
        this.gotologin();
      } else {
        this.common.ToastMessage("Fail", res.Message);
      }
    }).catch();
  }

  gotologin() {
    this.router.navigate(["/authentication/login"]);
  }

}
