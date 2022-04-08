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
  selector: 'app-userrolemaster',
  templateUrl: './userrolemaster.component.html',
  styleUrls: ['./userrolemaster.component.css']
})
export class UserrolemasterComponent implements OnInit {
  lists:any={};
  userroleform : FormGroup;
  updateid = 0;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private fb: FormBuilder,public common:CommonService,public dialog: MatDialog) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.lists.rolelist.filter = filterValue;
  }

  ngOnInit() {
    this.userroleform = this.fb.group({
      rolename: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
      roleStatus: ['',Validators.required],
    });

    this.lists.rolelist = new MatTableDataSource();
  this.lists.displayedColumns = [ 'rolename', 'rolestatus', 'action'];
  this.lists.rolelist.paginator = this.paginator;
  this.lists.rolelist.sort = this.sort;
  this.GetRoleMaster();
  }
  
  get usrroleForm() {
    return this.userroleform.controls;
  }

  GetRoleMaster(){
    this.common.GetMethod('master/getmaster?master=role').then((res:any)=>{
      if(res.status==1){
        this.lists.rolelist=new MatTableDataSource(res.data);
      }
    });
  }
   
  CreateUserRole(){
    this.common.PostMethod('master/add',{
      master:'role',
      name:this.userroleform.value.rolename,
      status:this.userroleform.value.roleStatus
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetRoleMaster();
          this.resetuserroleform();
      }else{
      this.common.ToastMessage('Info Error!',res.message);

      }
    }).catch(y=>{
      this.common.ToastMessage('Info Error!',y.error.message);
    });
  }

  EditUserRoleMaster(ev){
    this.updateid = ev.id
    this.userroleform.controls['rolename'].setValue(ev.name);
    if(ev.status){
      this.userroleform.controls['roleStatus'].setValue('1');
    }else{
      this.userroleform.controls['roleStatus'].setValue('0');
    }
  }

  UpdateUserRoleMaster(){   
   this.common.PostMethod('master/updatemaster',{
    master:'role',
    update:{
    name:this.userroleform.value.rolename,
    status:this.userroleform.value.roleStatus,
    },
    where:{id:this.updateid} ,

  }).then((res:any)=>{
      if(res.status==1){
        this.common.ToastMessage('Success',res.message);
        this.GetRoleMaster();
        this.resetuserroleform();
    }else{
    this.common.ToastMessage('Info Error!',res.message);

    }
  }).catch(y=>{
    this.common.ToastMessage('Info Error!',y.error.message);
  });
  }

  resetuserroleform(){
    this.updateid = 0;
    this.userroleform.controls['rolename'].setValue('');
    this.userroleform.controls['roleStatus'].setValue('');
  }

  DeleteConfirmation(ev){
    let dailog = this.common.dialog.open(ConfirmboxComponent,{data:{status:true,Message:"Are you sure you want to delete this record?"}});
    dailog.afterClosed().subscribe(data => {
      if (data) {
        this.DeleteUserRoleMaster(ev.id)
      } 
    });  
  }

  DeleteUserRoleMaster(_id){
    this.common.PostMethod('master/deletemaster',{
      master:'role',     
      where:{id:_id},  
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetRoleMaster();
          this.resetuserroleform();
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
