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
  selector: 'app-kycmaster',
  templateUrl: './kycmaster.component.html',
  styleUrls: ['./kycmaster.component.css']
})
export class KycmasterComponent implements OnInit {
  lists: any = {};
  kycnasterform: FormGroup;
  updateid = 0 ;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private fb: FormBuilder,public common:CommonService,public dialog: MatDialog) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.lists.kyclist.filter = filterValue;
  }

  ngOnInit() {
    this.kycnasterform = this.fb.group({
      DocumentName: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
      DocumentType: ['',Validators.required],
      DocumentForm: ['',Validators.required],
      Status: ['',Validators.required],      
    });

    this.lists.kyclist = new MatTableDataSource();
    this.lists.displayedColumns = ['name', 'Type', 'Form', 'status', 'action'];
    this.lists.kyclist.paginator = this.paginator;
    this.lists.kyclist.sort = this.sort;
    this.GetKYCMaster();
  }

  get kycForm() {
    return this.kycnasterform.controls;
  }

 GetKYCMaster(){
    this.common.GetMethod('master/getmaster?master=kyctype').then((res:any)=>{
      if(res.status==1){
        this.lists.kyclist=new MatTableDataSource(res.data);
      }
    });
  }

  resetKycform(){
    this.updateid = 0;
    this.kycnasterform.controls['DocumentName'].setValue('');
    this.kycnasterform.controls['DocumentType'].setValue('');
    this.kycnasterform.controls['DocumentForm'].setValue('');
    this.kycnasterform.controls['Status'].setValue('');
  }

  CreateKyc(){
    this.common.PostMethod('master/add',{
      master:'kyctype',
      doc_name:this.kycnasterform.value.DocumentName,
      doc_type:this.kycnasterform.value.DocumentType,
      form_id:this.kycnasterform.value.DocumentForm,
      status:this.kycnasterform.value.Status,
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetKYCMaster();
          this.resetKycform();
      }else{
      this.common.ToastMessage('Info Error!',res.message);
      }
    }).catch(y=>{
      this.common.ToastMessage('Info Error!',y.error.message);
    });
  }
  

  EditKycMaster(ev){
    this.updateid = ev.id
    this.kycnasterform.controls['DocumentName'].setValue(ev.doc_name);
    if(ev.status){
      this.kycnasterform.controls['Status'].setValue('1');
    }else{
      this.kycnasterform.controls['Status'].setValue('0');
    }   
    if(ev.form_id == 0){
      this.kycnasterform.controls['DocumentForm'].setValue('0');
    }else{
      this.kycnasterform.controls['DocumentForm'].setValue('1');
    }
    if(ev.doc_type == 0 ){
      this.kycnasterform.controls['DocumentType'].setValue('0');
    }else{
      this.kycnasterform.controls['DocumentType'].setValue('1');
    }    
  }

  UpdateKycMaster(){
    this.common.PostMethod('master/updatemaster',{
      master:'kyctype',
      update:{
        doc_name:this.kycnasterform.value.DocumentName,
        form_id:this.kycnasterform.value.DocumentForm,
        doc_type:this.kycnasterform.value.DocumentType,
        status:this.kycnasterform.value.Status,
      },
      where:{id:this.updateid} ,  
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetKYCMaster();
          this.resetKycform();
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
        this.DeleteKycMaster(ev.id)
      } 
    });  
  }

  DeleteKycMaster(_id){
    this.common.PostMethod('master/deletemaster',{
      master:'kyctype',     
      where:{id:_id},  
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetKYCMaster();
          this.resetKycform();
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
