import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { CommonService } from "../../Service/common.service";
import { CustomValidators } from "ng2-validation";
import * as moment from "moment";
import { MatDialog,MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import {ReminderinfodailogComponent} from '../../Dailogbox/reminderinfodailog/reminderinfodailog.component';

@Component({
  selector: "app-createreminder",
  templateUrl: "./createreminder.component.html",
  styleUrls: ["./createreminder.component.css"],
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

  constructor(public common: CommonService, public fb: FormBuilder) {}
  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      Id: [null],
      UserId: [null],
      InsuranceType: ["", [Validators.required]],
      Status: [""],
      ReminderDateTime: ["", [Validators.required]],
      Notes: [""],
      CreateDate: [""],
      UpdateDate: [""],

      ReminderDetailId: [null],
      PolicyHolder: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern("^[a-zA-Z ]+$"),
        ],
      ],
      PolicyNumber: [
        "",
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(20),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
      PlanDescption: ["", [Validators.required]],
      CompanyName: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern("^[a-zA-Z ]+$"),
        ],
      ],
      SumInsuredAssured: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
      PremiumAmt: [
        "",
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(20),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
      PaymentCycle: [
        "",
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(20),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
      PolicyTermYear: [
        "",
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(20),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
      CommencementDate: ["", [Validators.required]],
      PaymentDueDate: ["", [Validators.required]],
      MaturityDate: ["", [Validators.required]],
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
      "Action",
    ];
    this.ReminderTablelist.paginator = this.paginator;
    this.ReminderTablelist.sort = this.sort;
    this.GetpolicyReminderList();
    this.updaterecord = false;
  }

  GetpolicyReminderList() {
    this.common
      .GetMethod(
        `Birth_PolicyReminder/Usreid,ReminderType?Usreid=${localStorage.getItem(
          "UserID"
        )}&ReminderType=2`
      )
      .then((res: any) => {
        console.table(res);
        this.ReminderTablelist = new MatTableDataSource(res);
      });
  }

  get firtsForm() {
    return this.firstFormGroup.controls;
  }

  CreateReminder() {
    let submitdata: any = {
      reminderId: null,
      userId: localStorage.getItem("UserID"),
      bdayHolderName: this.firstFormGroup.value.PolicyHolder,
      reminderDateTime: this.firstFormGroup.value.ReminderDateTime,
      notes: this.firstFormGroup.value.Notes,
      reminderType: this.firstFormGroup.value.InsuranceType,
      fkReminderDetailId: null,
      fkReminderDetail: {
        reminderDetailId: null,
        policyNumber: this.firstFormGroup.value.PolicyNumber,
        planDescption: this.firstFormGroup.value.PlanDescption,
        companyName: this.firstFormGroup.value.CompanyName,
        sumInsuredAssured: this.firstFormGroup.value.SumInsuredAssured,
        premiumAmt: this.firstFormGroup.value.PremiumAmt,
        paymentCycle: this.firstFormGroup.value.PaymentCycle,
        policyTermYear: this.firstFormGroup.value.PolicyTermYear,
        startDate: this.firstFormGroup.value.CommencementDate,
        paymentDueDate: this.firstFormGroup.value.PaymentDueDate,
        maturityDate: this.firstFormGroup.value.MaturityDate,
      },
    };
    this.common
      .PostMethod(`Birth_PolicyReminder`, submitdata)
      .then((res: any) => {
        if (res.status == 1) {
          this.common.ToastMessage("Success", res.message);
          this.ResetReminder();
          this.GetpolicyReminderList();
          this.updaterecord = false;
        } else {
          this.common.ToastMessage("Info", res.message);
        }
      })
      .catch((y) => {
        this.common.ToastMessage("Error !", y.error.message);
      });
  }

  //Done
  ResetReminder() {
    this.firstFormGroup.controls["Id"].setValue(0);
    this.firstFormGroup.controls["UserId"].setValue(0);
    this.firstFormGroup.controls["InsuranceType"].setValue(0);
    this.firstFormGroup.controls["Status"].setValue("");
    this.firstFormGroup.controls["ReminderDateTime"].setValue("");
    this.firstFormGroup.controls["Notes"].setValue("");
    this.firstFormGroup.controls["CreateDate"].setValue("");
    this.firstFormGroup.controls["UpdateDate"].setValue("");

    this.firstFormGroup.controls["ReminderDetailId"].setValue("");
    this.firstFormGroup.controls["PolicyHolder"].setValue("");
    this.firstFormGroup.controls["PolicyNumber"].setValue("");
    this.firstFormGroup.controls["PlanDescption"].setValue("");
    this.firstFormGroup.controls["CompanyName"].setValue("");
    this.firstFormGroup.controls["SumInsuredAssured"].setValue("");
    this.firstFormGroup.controls["PremiumAmt"].setValue("");
    this.firstFormGroup.controls["PaymentCycle"].setValue("");
    this.firstFormGroup.controls["PolicyTermYear"].setValue("");
    this.firstFormGroup.controls["CommencementDate"].setValue("");
    this.firstFormGroup.controls["PaymentDueDate"].setValue("");
    this.firstFormGroup.controls["MaturityDate"].setValue("");
  }

  //done
  EditpolicyReminderRecord(val) {
    this.updaterecord = true;
    this.firstFormGroup.controls["Id"].setValue(val.reminderId);
    this.firstFormGroup.controls["UserId"].setValue(val.userId);
    this.firstFormGroup.controls["InsuranceType"].setValue(parseInt(val.reminderType));
    this.firstFormGroup.controls["PolicyHolder"].setValue(val.bdayHolderName);
    this.firstFormGroup.controls["Status"].setValue(val.reminderStatus);
    this.firstFormGroup.controls["ReminderDateTime"].setValue(val.reminderDateTime);
    this.firstFormGroup.controls["Notes"].setValue(val.notes);
    this.firstFormGroup.controls["CreateDate"].setValue(val.createDate);
    this.firstFormGroup.controls["UpdateDate"].setValue(val.updateDate);

    this.firstFormGroup.controls["ReminderDetailId"].setValue(
      val.fkReminderDetailId
    );
    this.firstFormGroup.controls["PolicyNumber"].setValue(
      parseInt(val.fkReminderDetail.policyNumber)
    );
    this.firstFormGroup.controls["PlanDescption"].setValue(
      val.fkReminderDetail.planDescption
    );
    this.firstFormGroup.controls["CompanyName"].setValue(
      val.fkReminderDetail.companyName
    );
    this.firstFormGroup.controls["SumInsuredAssured"].setValue(
      parseInt(val.fkReminderDetail.sumInsuredAssured)
    );
    this.firstFormGroup.controls["PremiumAmt"].setValue(
      parseInt(val.fkReminderDetail.premiumAmt)
    );
    this.firstFormGroup.controls["PaymentCycle"].setValue(
      parseInt(val.fkReminderDetail.paymentCycle)
    );
    this.firstFormGroup.controls["PolicyTermYear"].setValue(
      parseFloat(val.fkReminderDetail.policyTermYear)
    );
    this.firstFormGroup.controls["CommencementDate"].setValue(
      val.fkReminderDetail.startDate.split("T")[0]
    );
    this.firstFormGroup.controls["PaymentDueDate"].setValue(
      val.fkReminderDetail.paymentDueDate.split("T")[0]
    );
    this.firstFormGroup.controls["MaturityDate"].setValue(
      val.fkReminderDetail.maturityDate.split("T")[0]
    );
  }

  //done
  UpdatepolicyReminderReminder() {
    let submitdata: any = {
      reminderId: this.firstFormGroup.value.Id,
      userId: localStorage.getItem("UserID"),
      bdayHolderName: this.firstFormGroup.value.PolicyHolder,
      dobDate: null,
      reminderDateTime: this.firstFormGroup.value.ReminderDateTime,
      notes: this.firstFormGroup.value.Notes,
      reminderType: this.firstFormGroup.value.InsuranceType,
      fkReminderDetailId: this.firstFormGroup.value.ReminderDetailId,
      fkReminderDetail: {
        reminderDetailId: this.firstFormGroup.value.ReminderDetailId,
        policyNumber: this.firstFormGroup.value.PolicyNumber,
        planDescption: this.firstFormGroup.value.PlanDescption,
        companyName: this.firstFormGroup.value.CompanyName,
        sumInsuredAssured: this.firstFormGroup.value.SumInsuredAssured,
        premiumAmt: this.firstFormGroup.value.PremiumAmt,
        paymentCycle: this.firstFormGroup.value.PaymentCycle,
        policyTermYear: this.firstFormGroup.value.PolicyTermYear,
        startDate: this.firstFormGroup.value.CommencementDate,
        paymentDueDate: this.firstFormGroup.value.PaymentDueDate,
        maturityDate: this.firstFormGroup.value.MaturityDate,
      },
    };

    this.common
      .PostMethod(`Birth_PolicyReminder`, submitdata)
      .then((res: any) => {
        if (res.status == 1) {
          this.common.ToastMessage("Success", res.message);
          this.ResetReminder();
          this.GetpolicyReminderList();
          this.updaterecord = false;
        } else {
          this.common.ToastMessage("Info", res.message);
        }
      })
      .catch((y) => {
        this.common.ToastMessage("Error !", y.error.message);
      });
  }

  UpdateCreatereminderrStatus(val) {
    let submitdata: any = {};
    val.reminderStatus = !val.reminderStatus;
    submitdata.ReminderIdVal = val.reminderId;
    submitdata.status = val.reminderStatus;
    this.common.PatchMethod(`Birth_PolicyReminder/${submitdata.ReminderIdVal}`,submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
        this.ResetReminder();
        this.GetpolicyReminderList();
    this.updaterecord = false;
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !",y.error.message);
    });
  }

  ShowReminderAllDetail(val){
    debugger

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    //dialogConfig.panelClass='fullscreen-dialog',
    dialogConfig.height = "500px";
    dialogConfig.width = "1080px";
    //dialogConfig.height = "100vh";
    //dialogConfig.width = "100%";
    dialogConfig.data = {status:true,val};
    let dailog = this.common.dialog.open(ReminderinfodailogComponent,dialogConfig);
    dailog.afterClosed().subscribe(data => {
      debugger

  })
}

  //due
  DeletepolicyReminderRecord(val) {}
}
