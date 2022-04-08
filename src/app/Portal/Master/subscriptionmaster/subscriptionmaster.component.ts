import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormControlName,
} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { CommonService } from '../../Service/common.service';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmboxComponent } from '../../Dailogbox/confirmbox/confirmbox.component';

@Component({
  selector: 'app-subscriptionmaster',
  templateUrl: './subscriptionmaster.component.html',
  styleUrls: ['./subscriptionmaster.component.css']
})
export class SubscriptionmasterComponent implements OnInit {
  lists: any = {};
  subscrimasterform: FormGroup;
  updateid = 0;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private fb: FormBuilder,public common:CommonService,public dialog: MatDialog) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.lists.sublist.filter = filterValue;
  }

  ngOnInit() {
    this.subscrimasterform = this.fb.group({
      SubscriptionName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      Description: ['', Validators.required],
      FeeAmount: ['', Validators.required],
      validitymonths: ['', [Validators.required, Validators.maxLength(2), Validators.min(1), Validators.max(99)]],
      Status: ['', Validators.required],
    });

    this.lists.sublist = new MatTableDataSource();
    this.lists.displayedColumns = ['name', 'desc','Amount','month', 'status', 'action'];
    this.lists.sublist.paginator = this.paginator;
    this.lists.sublist.sort = this.sort;
    this.GetSubscriptionMaster();
  }

  get subscriForm() {
    return this.subscrimasterform.controls;
  }

  GetSubscriptionMaster(){
    this.common.GetMethod('master/getmaster?master=subscriptionmaster').then((res:any)=>{
      if(res.status==1){
        this.lists.sublist=new MatTableDataSource(res.data);
      }
    });
  }

  resetSubscriptionform(){
    this.updateid = 0;
    this.subscrimasterform.controls['SubscriptionName'].setValue('');
    this.subscrimasterform.controls['Description'].setValue('');
    this.subscrimasterform.controls['FeeAmount'].setValue('');    
    this.subscrimasterform.controls['validitymonths'].setValue('');
    this.subscrimasterform.controls['Status'].setValue('');
  }

  CreateSubscription(){
    this.common.PostMethod('master/add',{
      master:'subscriptionmaster',
      subscription_name:this.subscrimasterform.value.SubscriptionName,
      description:this.subscrimasterform.value.Description,
      amount: this.subscrimasterform.value.FeeAmount,
      validity:this.subscrimasterform.value.validitymonths,
      status:this.subscrimasterform.value.Status,
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetSubscriptionMaster();
          this.resetSubscriptionform();
      }else{
      this.common.ToastMessage('Info Error!',res.message);
      }
    }).catch(y=>{
      this.common.ToastMessage('Info Error!',y.error.message);
    });
  }

  EditSubscriptionMaster(ev){
    this.updateid = ev.id
    this.subscrimasterform.controls['SubscriptionName'].setValue(ev.subscription_name);
    this.subscrimasterform.controls['Description'].setValue(ev.description);
    this.subscrimasterform.controls['FeeAmount'].setValue(ev.amount);
    this.subscrimasterform.controls['validitymonths'].setValue(ev.validity);
    if(ev.status){
      this.subscrimasterform.controls['Status'].setValue('1');
    }else{
      this.subscrimasterform.controls['Status'].setValue('0');
    } 
  }


  UpdateSubscription(){
    this.common.PostMethod('master/updatemaster',{
      master:'subscriptionmaster',
      update:{
        subscription_name:this.subscrimasterform.value.SubscriptionName,
        description:this.subscrimasterform.value.Description,
        amount:this.subscrimasterform.value.FeeAmount,
        validity:this.subscrimasterform.value.validitymonths,
        status:this.subscrimasterform.value.Status,
      },
      where:{id:this.updateid} ,  
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetSubscriptionMaster();
          this.resetSubscriptionform();
      }else{
      this.common.ToastMessage('Info Error!',res.message);  
      }
    }).catch(y=>{
      this.common.ToastMessage('Info Error!',y.error.message);
    });
  }

  DeleteConfirmation(ev){
    let dailog = this.common.dialog.open(ConfirmboxComponent,{data:{status:true,Message:"Are you sure you want to delete this record?"}});
    dailog.afterClosed().subscribe(data => {
      if (data) {
        this.DeleteSubscriptionMaster(ev.id)
      } 
    });  
  }

DeleteSubscriptionMaster(_id){
  this.common.PostMethod('master/deletemaster',{
    master:'subscriptionmaster',     
    where:{id:_id},  
  }).then((res:any)=>{
      if(res.status==1){
        this.common.ToastMessage('Success',res.message);
        this.GetSubscriptionMaster();
          this.resetSubscriptionform();
    }else{
    this.common.ToastMessage('Info Error!',res.message);

    }
  }).catch(y=>{
    this.common.ToastMessage('Info Error!',y.error.message);
  });
}

  onSubmit() {
   
  }

}
