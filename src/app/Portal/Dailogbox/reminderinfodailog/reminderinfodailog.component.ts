import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { CommonService } from "../../Service/common.service";

@Component({
  selector: "app-reminderinfodailog",
  templateUrl: "./reminderinfodailog.component.html",
  styleUrls: ["./reminderinfodailog.component.css"],
})
export class ReminderinfodailogComponent implements OnInit {
  columwidth = "25";
  list: any = {};

  constructor(
    private common: CommonService,
    private dialogRef: MatDialogRef<ReminderinfodailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit() {
    this.getreminderdata();
  }

  getreminderdata() {
    if (this.data.status == true) {
      debugger
      var dataarray = this.data.val;
      this.list.bdayHolderName = dataarray.bdayHolderName;
      this.list.createDate = dataarray.createDate;
      this.list.notes = dataarray.notes;
      this.list.reminderDateTime = dataarray.reminderDateTime;
      this.list.reminderStatus = dataarray.reminderStatus;

      let reminderTypeName = this.common.InsuranceType.filter(x=> x.id == dataarray.reminderType)
      this.list.reminderType = reminderTypeName[0].insType;

      this.list.updateDate = dataarray.updateDate;
      this.list.userId = dataarray.userId;

      this.list.companyName = dataarray.fkReminderDetail.companyName;
      this.list.maturityDate = dataarray.fkReminderDetail.maturityDate;

      let paymentCycle = this.common.PaymentCycle.filter(x=> x.val == dataarray.fkReminderDetail.paymentCycle);
      this.list.paymentCycle = paymentCycle[0].payCycName;

      this.list.paymentDueDate = dataarray.fkReminderDetail.paymentDueDate;
      this.list.planDescption = dataarray.fkReminderDetail.planDescption;
      this.list.policyNumber = dataarray.fkReminderDetail.policyNumber;
      this.list.policyTermYear = dataarray.fkReminderDetail.policyTermYear;
      this.list.premiumAmt = dataarray.fkReminderDetail.premiumAmt;
      this.list.startDate = dataarray.fkReminderDetail.startDate;
      this.list.sumInsuredAssured =
        dataarray.fkReminderDetail.sumInsuredAssured;
    }
  }

  closeModal() {
    this.dialogRef.close();
  }
}
