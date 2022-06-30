import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../Service/common.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CustomValidators } from 'ng2-validation';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  lists: any = {};

  newUserlist = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public common: CommonService, public fb: FormBuilder,public dialogRef: MatDialogRef<UserdetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.lists.bankdetailList = new MatTableDataSource();
    this.lists.displayedColumns = ['BankName', 'AccountNo', 'IFSCCode', 'AccountType',];
    this.lists.bankdetailList.paginator = this.paginator;
    this.lists.bankdetailList.sort = this.sort;
    this.Userdetail();
  }

  Userdetail(){
    if(this.data.status == true){
      let data = this.data.ev;
      this.lists.usertype = data.user_type;
      let res = data.name.split(" ");
      let names = [res.shift(), res.join(' ')];
      this.lists.firstname = names[0];
      this.lists.lastname = names[1];
      this.lists.email = data.email;
      this.lists.mobnumber = data.mobile;
      this.lists.detailview = false;
      this.lists.detailbtn = false;
      this.lists.detailbtn1 = false;
      this.lists.detailview1 = false;
      if(data.user_address){
         //permanent address
        if(data.user_address.length > 0){
          this.lists.perAddress = data.user_address[0].address;
             if(data.user_address[0].address.length > 50  ){
              this.lists.detailview = true;
              this.lists.detailbtn = true;
             }
          this.lists.perState = data.user_address[0].state_id;
          this.lists.perCity = data.user_address[0].city_id;
          this.lists.perPincode = data.user_address[0].pincode;
        }else{
          this.lists.perAddress = '';
          this.lists.perState = '';
          this.lists.perCity = '';
          this.lists.perPincode = '';
        }
          //corresponding address
          if(data.user_address.length > 0){
          this.lists.corresAddress = data.user_address[0].address;
          if(data.user_address[0].address.length > 50  ){
            this.lists.detailview1 = true;
            this.lists.detailbtn1 = true;
           }
          this.lists.corresState = data.user_address[0].state_id;
          this.lists.corresCity = data.user_address[0].city_id;
          this.lists.corresPincode = data.user_address[0].pincode;
          }else{
            this.lists.corresAddress = '';
            this.lists.corresState = '';
            this.lists.corresCity = '';
            this.lists.corresPincode = '';

          }

      }

      // subscription detail
       this.lists.subscriptionplanid = data.subscription_id;
      let psdate = data.subscription_info.subscription_date.split("T");
      this.lists.subscriptionplanstartdate = psdate[0];
      let esdate = data.subscription_info.expire_date.split("T");
      this.lists.subscriptionplanenddate = esdate[0];
      // account detail
      this.lists.acc_create_date = data.createdAt;
      this.lists.acc_update_date = data.updatedAt;
      this.lists.lastlogin = data.last_login_at;
    }
  }

}
