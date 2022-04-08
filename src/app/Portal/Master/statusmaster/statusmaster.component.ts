import { Component, OnInit,ViewChild } from '@angular/core';
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
  selector: 'app-statusmaster',
  templateUrl: './statusmaster.component.html',
  styleUrls: ['./statusmaster.component.css']
})
export class StatusmasterComponent implements OnInit {
  lists:any={};
  statusmasform: FormGroup;
  updateid = 0;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private fb: FormBuilder,public common:CommonService, public dialog: MatDialog) {
   }

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.lists.statuslist.filter = filterValue;
  }

  ngOnInit() {
    this.statusmasform = this.fb.group({
      StatusName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      Status: ['',Validators.required],
    });

    this.lists.statuslist = new MatTableDataSource();
    this.lists.displayedColumns = ['name', 'status', 'action'];
    this.lists.statuslist.paginator = this.paginator;
    this.lists.statuslist.sort = this.sort;
    this.GetStatusMaster();
  }

  get statusForm() {
    return this.statusmasform.controls;
  }
  
  GetStatusMaster(){
    this.common.GetMethod('master/getmaster?master=statustype').then((res:any)=>{
      if(res.status==1){
        this.lists.statuslist=new MatTableDataSource(res.data);
      }
    });
  }

  resetStatusMaster(){
    this.updateid = 0;
    this.statusmasform.controls['StatusName'].setValue('');
    this.statusmasform.controls['Status'].setValue('');
  }


  CreateStatusMaster(){
    this.common.PostMethod('master/add',{
      master:'statustype',
      name:this.statusmasform.value.StatusName,
      status:this.statusmasform.value.Status,     
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetStatusMaster();
          this.resetStatusMaster();
      }else{
      this.common.ToastMessage('Info Error!',res.message);
      }
    }).catch(y=>{
      this.common.ToastMessage('Info Error!',y.error.message);
    });
  }

  EditStatusMaster(ev){
    this.updateid = ev.id;
    this.statusmasform.controls['StatusName'].setValue(ev.name);
    if(ev.status){
      this.statusmasform.controls['Status'].setValue('1');
    }else{
      this.statusmasform.controls['Status'].setValue('0');
    }
  }

  UpdateStatusMaster(){
    this.common.PostMethod('master/updatemaster',{
      master:'statustype',
      update:{
        name:this.statusmasform.value.StatusName,
        status:this.statusmasform.value.Status, 
      },
      where:{id:this.updateid} ,  
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetStatusMaster();
          this.resetStatusMaster();
      }else{
      this.common.ToastMessage('Info Error!',res.message);  
      }
    }).catch(y=>{
      this.common.ToastMessage('Info Error!',y.error.message);
    });
  }

  DeleteConfirmation(ev){
    let dailog = this.common.dialog.open(ConfirmboxComponent,{data:{status:true,Message:'Are you sure you want to delete this record?'}});
    dailog.afterClosed().subscribe(data => {
      if (data) {
        this.DeleteStatusMaster(ev.id)
      } 
    });  
    }

  DeleteStatusMaster(_id){
    this.common.PostMethod('master/deletemaster',{
      master:'statustype',     
      where:{id:_id},  
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetStatusMaster();
          this.resetStatusMaster();
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

