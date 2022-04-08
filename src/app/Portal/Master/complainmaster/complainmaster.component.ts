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
  selector: 'app-complainmaster',
  templateUrl: './complainmaster.component.html',
  styleUrls: ['./complainmaster.component.css']
})
export class ComplainmasterComponent implements OnInit {
  complainmasterform:FormGroup;
  lists:any={};
  updateid = 0;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private fb :FormBuilder,public common:CommonService,public dialog: MatDialog) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.lists.complist.filter = filterValue;
  }

  ngOnInit() {
    this.complainmasterform = this.fb.group({
      ComplaintType:['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      Status : ['', Validators.required],
    });
    
    this.lists.complist = new MatTableDataSource();
    this.lists.displayedColumns = ['ctype', 'status', 'action'];
    this.lists.complist.paginator = this.paginator;
    this.lists.complist.sort = this.sort;
    this.GetComplainMaster();
  }
  get copmplainForm() {
    return this.complainmasterform.controls;
  }

  GetComplainMaster(){
    this.common.GetMethod('master/getmaster?master=complaintmaster').then((res:any)=>{
      if(res.status==1){
        this.lists.complist=new MatTableDataSource(res.data);
      }
    });
  }

  CreateComplainMaster(){
    this.common.PostMethod('master/add',{
      master:'complaintmaster',
      complaint_name:this.complainmasterform.value.ComplaintType,
      status:this.complainmasterform.value.Status,     
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetComplainMaster();
          this.resetComplainMaster();
      }else{
      this.common.ToastMessage('Info Error!',res.message);
      }
    }).catch(y=>{
      this.common.ToastMessage('Info Error!',y.error.message);
    });
  }

  UpdateComplainMaster(){
    this.common.PostMethod('master/updatemaster',{
      master:'complaintmaster',
      update:{
        complaint_name:this.complainmasterform.value.ComplaintType,
        status:this.complainmasterform.value.Status, 
      },
      where:{id:this.updateid} ,  
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetComplainMaster();
          this.resetComplainMaster();
      }else{
      this.common.ToastMessage('Info Error!',res.message);  
      }
    }).catch(y=>{
      this.common.ToastMessage('Info Error!',y.error.message);
    });
  }

  resetComplainMaster(){
    this.updateid = 0;
    this.complainmasterform.controls['ComplaintType'].setValue('');
    this.complainmasterform.controls['Status'].setValue('');
  }

  EditComplainMaster(ev){
    this.updateid = ev.id;
    this.complainmasterform.controls['ComplaintType'].setValue(ev.complaint_name);
    if(ev.status){
      this.complainmasterform.controls['Status'].setValue('1');
    }else{
      this.complainmasterform.controls['Status'].setValue('0');
    }
  }

  DeleteConfirmation(ev){
    let dailog = this.common.dialog.open(ConfirmboxComponent,{data:{status:true,Message:"Are you sure you want to delete this record?"}});
    dailog.afterClosed().subscribe(data => {
      if (data) {
        this.DeleteComplainMaster(ev.id)
      } 
    });  
  }

  DeleteComplainMaster(_id){ 
    this.common.PostMethod('master/deletemaster',{
      master:'complaintmaster',     
      where:{id:_id},  
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetComplainMaster();
          this.resetComplainMaster();
          _id = 0;
      }else{
      this.common.ToastMessage('Info Error!',res.message);
  
      }
    }).catch(y=>{
      this.common.ToastMessage('Info Error!',y.error.message);
    });

  }

  onSubmit(){
  }

}
