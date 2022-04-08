import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CommonService } from '../../Service/common.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  lists: any = {};
  constructor(public dialogRef: MatDialogRef<ChangepasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public common: CommonService) {
  }

  ngOnInit() {
  }
  onClick() {
    if (this.lists.password == this.lists.confirmpassword) {
      if (!this.lists.passsword) {
        this.dialogRef.close({ Status: true, Password: this.lists.password });
      } else {
        this.common.ToastMessage("Fail", "Please Do not Blank Password")
      }
    } else {
      this.common.ToastMessage("Wrong", "Password Or Confirm Password not Match please retry")
    }
  }
  close() {
    this.dialogRef.close({ Status: false });
  }

}
