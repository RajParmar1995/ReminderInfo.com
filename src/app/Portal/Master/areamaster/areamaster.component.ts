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
  selector: 'app-areamaster',
  templateUrl: './areamaster.component.html',
  styleUrls: ['./areamaster.component.css']
})
export class AreamasterComponent implements OnInit {
lists:any={};
areaform: FormGroup;
updateid = 0;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private fb: FormBuilder,public common:CommonService,public dialog: MatDialog) {
   }

  ngOnInit() {
    this.areaform = this.fb.group({
      AreaName: ['', Validators.required],
      Status: ['',Validators.required],
    });

    this.lists.Arealist = new MatTableDataSource();
    this.lists.displayedColumns = ['name', 'status', 'action'];
    this.lists.Arealist.paginator = this.paginator;
    this.lists.Arealist.sort = this.sort;
    this.GetAreaMaster();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.lists.Arealist.filter = filterValue;
  }

  GetAreaMaster(){
    this.common.GetMethod('master/getmaster?master=areamaster').then((res:any)=>{
      if(res.status==1){
        this.lists.Arealist=new MatTableDataSource(res.data);
      }
    });
  }

  CreateAreaMaster(){
    this.common.PostMethod('master/add',{
      master:'areamaster',
      name:this.areaform.value.AreaName,
      status:this.areaform.value.Status
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetAreaMaster();
          this.ResetAreaMaster();
      }else{
      this.common.ToastMessage('Info Error!',res.message);
      }
    }).catch(y=>{
      this.common.ToastMessage('Info Error!',y.error.message);
    });
  }

  EditAreaMaster(ev){
    this.updateid = ev.id
    this.areaform.controls['AreaName'].setValue(ev.name);
    if(ev.status){
      this.areaform.controls['Status'].setValue('1');
    }else{
      this.areaform.controls['Status'].setValue('0');
    }
  }
  ResetAreaMaster(){
    this.updateid = 0;
    this.areaform.controls['AreaName'].setValue('');
    this.areaform.controls['Status'].setValue('');
  }

  DeleteConfirmation(ev){
    let dailog = this.common.dialog.open(ConfirmboxComponent,{data:{status:true,Message:"Are you sure you want to delete this record?"}});
    dailog.afterClosed().subscribe(data => {
      if (data) {
        this.DeleteAreaMaster(ev.id)
      } 
    });  
  }

  DeleteAreaMaster(_id){
    this.common.PostMethod('master/deletemaster',{
      master:'areamaster',     
      where:{id:_id},  
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetAreaMaster();
          this.ResetAreaMaster();
      }else{
      this.common.ToastMessage('Info Error!',res.message);
  
      }
    }).catch(y=>{
      this.common.ToastMessage('Info Error!',y.error.message);
    });

  }

  UpdateAreaMaster(){
  this.common.PostMethod('master/updatemaster',{
    master:'areamaster',
    update:{
    name:this.areaform.value.AreaName,
    status:this.areaform.value.Status,
    },
    where:{id:this.updateid} ,

  }).then((res:any)=>{
      if(res.status==1){
        this.common.ToastMessage('Success',res.message);
        this.GetAreaMaster();
        this.ResetAreaMaster();
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
