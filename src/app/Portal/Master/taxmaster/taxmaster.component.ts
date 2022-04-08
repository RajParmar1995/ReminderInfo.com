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

@Component({
  selector: 'app-taxmaster',
  templateUrl: './taxmaster.component.html',
  styleUrls: ['./taxmaster.component.css']
})
export class TaxmasterComponent implements OnInit {
  lists:any={};
  taxmasterform : FormGroup;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private fb : FormBuilder,public common:CommonService) { }

  ngOnInit() {
    this.taxmasterform = this.fb.group({
      TaxName : ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      TaxValue : ['', [Validators.required, Validators.maxLength(2), Validators.min(1), Validators.max(99)]],
      Status : ['', Validators.required],
    });

    this.lists.taxlist = new MatTableDataSource();
    this.lists.displayedColumns = ['name', 'value','status', 'action'];
    this.lists.taxlist.paginator = this.paginator;
    this.lists.taxlist.sort = this.sort;
    this.GetTaxMaster();
    
  }

  GetTaxMaster(){
    this.common.GetMethod('master/getmaster?master=taxmaster').then((res:any)=>{
      if(res.status==1){
        this.lists.taxlist=new MatTableDataSource(res.data);
      }
    });
  }

  CreateTaxMaster(){
    this.common.PostMethod('master/add',{
      master:'taxmaster',
      name:this.taxmasterform.value.tax_name,
      value:this.taxmasterform.value.tax_value,
      status:this.taxmasterform.value.Status
    }).then((res:any)=>{
        if(res.status==1){
          this.common.ToastMessage('Success',res.message);
          this.GetTaxMaster();
      }else{
      this.common.ToastMessage('Info Error!',res.message);

      }
    }).catch(y=>{
      this.common.ToastMessage('Info Error!',y.error.message);
    });
  }

  get taxForm() {
    return this.taxmasterform.controls;
  }
  onSubmit(){
    
  }

}
