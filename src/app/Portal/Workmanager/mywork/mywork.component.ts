import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../Service/common.service';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.css']
})
export class MyworkComponent implements OnInit {
  hide = true;
  lists: any = {};
  Workform: FormGroup;
  manage: any = {};
  myworkform: FormGroup;
  
  constructor(public common: CommonService, public fb: FormBuilder) { 
    this.lists.TransTypelist = [{ name: "On Hold", value: 'onhold'  }, { name: "Success", value: 'success'  }, { name: "Failed", value: 'failed'  }];
    this.lists.transid = [];
    this.GetMyWork();
  }

  ngOnInit() {
    this.myworkform = this.fb.group({
      transstatus: ['', Validators.required],
      transid: ['', Validators.required],
      receiptid: [''],
      depositor: ['', Validators.required],
    });
    this.myworkform.controls["depositor"].setValue(localStorage.getItem("UserId"))

  }
  Save() {
    this.common.PostMethod("Savemywork", this.myworkform.value).then((res: any) => {
      if (res.Status == 1) {
        this.myworkform.reset();
        this.myworkform.controls['depositor'].setValue(localStorage.getItem("UserId"));
        this.common.ToastMessage('Success', res.Message);
        this.GetMyWork();
      } else {
        this.common.ToastMessage('Failure', res.Message);
      }
    });
  }

  GetMyWork() {
    this.common.GetMethod("GetMyPendingWork?Id=" + localStorage.getItem("UserId")).then((res: any) => {
      this.manage = res.Data || {};
      this.myworkform.controls["receiptid"].setValue(res.Data.receipt);
      this.myworkform.controls["transstatus"].setValue(res.Data.billstatus);
    });
  }

}
