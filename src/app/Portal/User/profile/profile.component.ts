import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CommonService } from '../../Service/common.service';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  lists: any = {};
  bankdetailListarray = [];
  doctype = [];
  userdetailarray = [];

  newUserlist = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  kycdetailList = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator2: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort2: MatSort;
  constructor(public common: CommonService, public fb: FormBuilder) { }

  ngOnInit() {
    this.lists.bankdetailList = new MatTableDataSource();
    this.lists.displayedColumns = ['BankName', 'AccountNo', 'IFSCCode', 'AccountType',];
    this.lists.bankdetailList.paginator = this.paginator;
    this.lists.bankdetailList.sort = this.sort;

     this.lists.kycdetailList = new MatTableDataSource();
    this.lists.displayedColumns2 = ['DcName','DocNo','DocImage',];
    this.lists.kycdetailList.paginator = this.paginator2;
    this.lists.kycdetailList.sort = this.sort2;
    
    this.userdetail();
  }

  shortformatDate(date) {
    if(date){
    var day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    var month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var year = date.getFullYear();
    return day + "/" + month + "/" + year;
    }else{
      return '';
    }
  }
  checkplanvalidity(pstartDate,plantype){
    if(pstartDate && plantype){
      let days = 0;
      if(plantype == 'Yearlyplan'){
      days = 365;
      }else if(plantype == 'sixmonthplan'){
      days = 181;
    }
      let finaldate = new Date(pstartDate.getTime() + days*24*60*60*1000);      
      return finaldate;
      }else{
        return '';
      }       
  }
  checkplandetail(plantype){
    if(plantype == 'Yearlyplan'){
      return 'Basic Yearly Plan(Rs. 1000/-)';
      }else if(plantype == 'sixmonthplan'){
      return '6 Month Plan(Rs. 500/-)';      
      } 
  }


userdetail(){
  let data = JSON.parse(localStorage.getItem("UserProfile"));
  this.lists.usertype = data.user_type;
  let res = data.name.split(" ");
  this.lists.firstname = res[0];
  this.lists.lastname = res[1];
  this.lists.email = data.email;
  this.lists.mobnumber = data.mobile;
  //permanent address
  if(data.user_address.length > 0){
  this.lists.perAddress = data.user_address[0].address;        
  this.lists.perState = data.user_address[0].state_id;  
  this.lists.perCity = data.user_address[0].city_id;
  this.lists.perPincode = data.user_address[0].pincode;
}
  //corresponding address
  if(data.user_address.length > 0){
  this.lists.corresAddress = data.user_address[0].address;
  this.lists.corresState = data.user_address[0].state_id;
  this.lists.corresCity = data.user_address[0].city_id;
  this.lists.corresPincode = data.user_address[0].pincode;
  }
//Bank
  this.lists.bankdetailList = new MatTableDataSource();
  
   // subscription detail
   this.lists.subscriptionplanid = data.subscription_info.id;     
   let psdate = data.subscription_info.subscription_date.split("T");
   this.lists.subscriptionplanstartdate = psdate[0];
   let esdate = data.subscription_info.expire_date.split("T");
   this.lists.subscriptionplanenddate = esdate[0];
  //  let Doctype = [{id: 3, docname: "PAN CARD", doctype: 1, value: "12345677", image: "https://apitechjaipur.easybillpay.co.in/Files/1619535795816089963-user our product.png"},
  //       {id: 2, docname: "AADHAR CARD", doctype: 1, value: "54545454545454", image: "https://apitechjaipur.easybillpay.co.in/Files/1619535804496316417-user profle page.png"},
  //       {id: 1, docname: "Photo", doctype: 0, image: "https://apitechjaipur.easybillpay.co.in/Files/16195358241281078364-user registration.png"}]

  //Kyc        
   this.lists.kycdetailList = new MatTableDataSource();
}

  // dataarray = [
  //   {
  //     confirmPassword: "Hello@123",
  //     email: "test@gmail.com",
  //     firstname: "Raj",
  //     lastname: "parmar",
  //     mobnumber: "4443434343",
  //     password: "Hello@123",
  //     usertype: "Individual",
  //     corresAddress: "new ashok nagar khara kua near 100 ft road petrol pump",
  //     corresCity: "udaipur",
  //     corresPincode: 313001,
  //     corresState: { code: "AN", name: "Rajasthan" },
  //     perAddress: "new ashok nagar khara kua near 100 ft road petrol pump",
  //     perCity: "udaipur",
  //     perPincode: 313001,
  //     perState: { code: "AN", name: "Rajasthan" },
  //     bankdetail: [{ bankname: "Axis Bank", accttype: "Saving", ifsccode: "axic0301", accountno: 5012344295316295 },
  //     { bankname: "HDFC Bank", accttype: "Saving", ifsccode: "hdfc3201", accountno: 8912762995312985 },
  //     { bankname: "Punjab Bank", accttype: "Current", ifsccode: "pnbb6736", accountno: 8372912309852689 }],
  //     // Subscriptionplan: "Basic Yearly Plan(Rs. 1000/-)",
  //     Subscriptionplan: "sixmonthplan",
  //     Planstartdate: new Date('04-28-2021'),
  //     Doctype:[{id: 3, docname: "PAN CARD", doctype: 1, value: "12345677", image: "https://apitechjaipur.easybillpay.co.in/Files/1619535795816089963-user our product.png"},
  //     {id: 2, docname: "AADHAR CARD", doctype: 1, value: "54545454545454", image: "https://apitechjaipur.easybillpay.co.in/Files/1619535804496316417-user profle page.png"},
  //     {id: 1, docname: "Photo", doctype: 0, image: "https://apitechjaipur.easybillpay.co.in/Files/16195358241281078364-user registration.png"}]
  //   }

  // ];
}
