import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CommonService } from '../../Service/common.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  lists: any = {};
  constructor(public dialogRef: MatDialogRef<OtpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public common: CommonService) {
      this.lists.mobile = data.mobile;
    this.lists.OTP = data.OTP;
    console.log(data);
    this.lists.Randomnumber= data.OTP;
  }

  ngOnInit() {
  }
  onClick() {
    if(this.lists.Randomnumber==this.lists.otp){
      this.dialogRef.close(true);
    
    }
    else{
      this.common.ToastMessage("Fail", "Wrong OTP");
    
    }
  }
  resend() {
    this.lists.Randomnumber = Math.floor(100000 + Math.random() * 900000);
    this.common.PostMethod("SendOTP", { Mobile: this.lists.mobile, OTP: this.lists.Randomnumber }).then((res: any) => {
      if (res.Status == 1) {
        this.common.ToastMessage("Success", "OTP resend successfully on your registered Mobile "+ this.lists.mobile );
      }
    });
  }
  close() {
    this.dialogRef.close(false);
  }

  setOtp(ev) {
    this.lists.otp = ev;
  }
}
