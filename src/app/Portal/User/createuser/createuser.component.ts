import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CommonService } from '../../Service/common.service';
import { CustomValidators } from 'ng2-validation';

const password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]));
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));
const Todatdate = new Date();

export interface state {
  code: string;
  name: string;
}

export interface bankdetailList {
  BankName: string;
  AccountNo: number;
  IFSCCode: string;
  AccountType: string;
}

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})

export class CreateuserComponent implements OnInit {
  lists: any = {};
  Userlist = [];
  bankdetailList = [];
  bankdetailListarray = [];
  bankdetail: any = {};
  KYCdata = [];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  isOptional = false;
  isEditable = false;
  hide = true;
  hide1 = true;

  AcctTypelist = [{ name: "Saving" }, { name: "Current" }];
  submitcreateuserformdata = [];
  checkaccountlistlenfth = false;
  checkactivityaddupdatebtn = true;
  copyofaccountname = '';
  copyofaccountnumber = '';

  usertypearray = [];
  statearray = [];
  cityarray = [];
  cityarraycors = [];
  statevalue = '';
  SubPlans = [];

  newUserlist = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public common: CommonService, public fb: FormBuilder) {
    // this.lists.UserTypelist = [{ name: "Admin" }, { name: "Agent" }, { name: "Depositor" }, { name: "Manager" }];
    // this.lists.AcctTypelist = [{ name: "Saving" }, { name: "Current" }];
    this.lists.Doctype = [];
    // if (localStorage.getItem("UserType") == 'Admin') {
    //   this.lists.usertype = "Agent";
    // }
    // this.GetUserList();
    // this.GetCitylist();
    //this.GetDocList();

  }
  ngOnInit() {
    this.lists.bankdetailList = new MatTableDataSource(this.bankdetailListarray);
    this.lists.displayedColumns = ['BankName', 'AccountNo', 'IFSCCode', 'AccountType', 'Action'];
    this.lists.bankdetailList.paginator = this.paginator;
    this.lists.bankdetailList.sort = this.sort;

    // this.lists.SelectedIndex = 0;
    // this.lists.displayedColumns = ['action', 'name', 'Branchname', 'mobile', 'usertype', 'PresentAmount', 'lastlogin', 'status', 'login'];
    // this.newUserlist.paginator = this.paginator;
    // this.newUserlist.sort = this.sort;
    /*  this.userform = this.fb.group({
        aId: new FormControl(localStorage.getItem("UserId"), Validators.required),
        name: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        mobile: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])),
        branch: new FormControl('', Validators.required),
        usertype: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        confirmpassword: new FormControl(),
        amount: new FormControl(0),
        bankname: new FormControl(''),
        accttype: new FormControl(''),
        ifsccode: new FormControl(''),
        account: new FormControl(''),
        KYC: new FormControl([]),
        id: new FormControl(0)
      }, this.checkPasswords);*/

    this.firstFormGroup = this.fb.group({
      usertype: ['', Validators.required],
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]+$')]],
      mobnumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: password,
      confirmPassword: confirmPassword,
    });
    this.secondFormGroup = this.fb.group({
      perAddress: ['', Validators.required],
      perState: ['', Validators.required],
      perCity: ['', Validators.required],
      perPincode: ['', [Validators.required, Validators.maxLength(6), Validators.min(100000), Validators.max(999999)]],
      corresAddress: ['', Validators.required],
      corresState: ['', Validators.required],
      corresCity: ['', Validators.required],
      corresPincode: ['', [Validators.required, Validators.maxLength(6), Validators.min(100000), Validators.max(999999)]],
    });
    this.thirdFormGroup = this.fb.group({
      bankname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      accttype: ['', Validators.required],
      ifsccode: ['', Validators.required],
      accountno: ['', Validators.required],
    });
    this.fourthFormGroup = this.fb.group({
      KYC: new FormControl([]),
      // id: [0],
    });
    this.fifthFormGroup = this.fb.group({
      Subscriptionplan: ['', Validators.required],
      Planstartdate: Todatdate,
    });

    // this.GetUserTypeMaster();
    // this.GetSubscriptionMaster();
    // this.GetStates();
  }
  get firtsForm() {
    return this.firstFormGroup.controls;
  }
  get secondForm() {
    return this.secondFormGroup.controls;
  }
  get fifthForm() {
    return this.fifthFormGroup.controls;
  }

  AddressCopy(e) {
    if (e.checked) {
      this.secondFormGroup.controls['corresAddress'].setValue(this.secondFormGroup.value.perAddress);
      this.secondFormGroup.controls['corresState'].setValue(this.secondFormGroup.value.perState);
      this.secondFormGroup.controls['corresCity'].setValue(this.secondFormGroup.value.perCity);
      this.secondFormGroup.controls['corresPincode'].setValue(this.secondFormGroup.value.perPincode);
    } else {
      this.secondFormGroup.controls['corresAddress'].setValue('');
      this.secondFormGroup.controls['corresState'].setValue('');
      this.secondFormGroup.controls['corresCity'].setValue('');
      this.secondFormGroup.controls['corresPincode'].setValue('');
    }
  }

  GetUserTypeMaster() {
    this.common.GetMethod('master/getmaster?master=role').then((res: any) => {
      if (res.status == 1) {
        this.usertypearray = res.data;
      }
    }).catch(y => {
      this.common.ToastMessage("Error !", y.error.message);
    });
  }
  GetSubscriptionMaster() {
    this.common.GetMethod('master/getmaster?master=subscriptionmaster').then((res: any) => {
      if (res.status == 1) {
        this.SubPlans = res.data;
      }
    }).catch(y => {
      this.common.ToastMessage("Error !", y.error.message);
    });
  }
  GetStates() {
    this.common.PostMethod("common/getstates", { id: 101 }).then((res: any) => {
      if (res.status == 1) {
        this.statearray = res.data;
      }
    }).catch(y => {
      this.common.ToastMessage("Error !", y.error.message);
    });
  }

  GetCity() {
    let stateid = this.secondFormGroup.value.perState;
    this.common.PostMethod("common/getcities", { id: stateid }).then((res: any) => {
      if (res.status == 1) {
        this.cityarray = res.data;
        this.cityarraycors = res.data;
      }
    }).catch(y => {
      this.common.ToastMessage("Error !", y.error.message);
    });
  }
  GetCityCors() {
    let stateid = this.secondFormGroup.value.corresState;
    this.common.PostMethod("common/getcities", { id: stateid }).then((res: any) => {
      if (res.status == 1) {
        this.cityarraycors = res.data;
      }
    }).catch(y => {
      this.common.ToastMessage("Error !", y.error.message);
    });
  }

  CreateUser() {   
    let submitdata : any = {}
    submitdata.user_type = this.firstFormGroup.value.usertype,
    submitdata.name = this.firstFormGroup.value.firstname + ' ' + this.firstFormGroup.value.lastname,
    submitdata.mobile = this.firstFormGroup.value.mobnumber,
    submitdata.email = this.firstFormGroup.value.email,
    submitdata.password = this.firstFormGroup.value.confirmPassword,
    submitdata.fcm_id = localStorage.getItem("FCMID")
    if (this.firstFormGroup.value.usertype < 3) {  
      submitdata.address = [
                {
                  address: this.secondFormGroup.value.perAddress,
                  state_id: this.secondFormGroup.value.perState,
                  city_id: this.secondFormGroup.value.perCity,
                  pincode: this.secondFormGroup.value.perPincode,
                  address_type: 0,
                  status: 1
                },
                {
                  address: this.secondFormGroup.value.corresAddress,
                  state_id: this.secondFormGroup.value.corresState,
                  city_id: this.secondFormGroup.value.corresCity,
                  pincode: this.secondFormGroup.value.corresPincode,
                  address_type: 1,
                  status: 1
                },
              ],
              
      submitdata.bankdetails = this.bankdetailListarray,
      submitdata.kycdetails = this.lists.Doctype,
      submitdata.subscription_id = parseInt(this.fifthFormGroup.value.Subscriptionplan)            
    }else{
      submitdata.address = [
        {
          address: '',
          state_id: '',
          city_id: '',
          pincode: '',
          address_type: 0,
          status: 1
        },
        {
          address: '',
          state_id: '',
          city_id: '',
          pincode: '',
          address_type: 1,
          status: 1
        },
      ],
      
submitdata.bankdetails = '',
submitdata.kycdetails = '',
      submitdata.subscription_id = 1;
    }
    this.common.PostMethod("user/addnewuser", submitdata).then((res: any) => {
      if (res.status == 1) {
        this.common.ToastMessage("Success", res.message);
      } else {
        this.common.ToastMessage("Info", res.message);
      }
    }).catch(y => {
      this.common.ToastMessage("Error !",y.error.message);
    });

  }







  ///////////////////////---------------api work end------------------//////////////////////////////////////////////



  // bankdetailarraylist: accdetail[] = [{"BankName": "AN","AccountNo": 123,"IFSCCode": "helo123","AccountType":"saving"},

  // ];

  // checkpasswordstrength(event){
  //   this.passworderrors = ''
  //   let val = this.firstFormGroup.value.password;
  //   let pattern = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
  //   if (pattern.test(val)) {
  //    return this.passworderrors = '';
  //     } else{
  //      return this.passworderrors = 'Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character:.';
  //     }
  // }
  checkaccountnolength() {
    if (this.bankdetailListarray.length > 0) {
      this.checkaccountlistlenfth = true;
    } else {
      this.checkaccountlistlenfth = false;
    }
  }

  Addbankdetail() {
    this.checkactivityaddupdatebtn = true;
    this.bankdetailListarray.push(this.thirdFormGroup.value);
    this.lists.bankdetailList = new MatTableDataSource(this.bankdetailListarray);
    this.lists.displayedColumns = ['BankName', 'AccountNo', 'IFSCCode', 'AccountType', 'Action'];
    this.lists.bankdetailList.paginator = this.paginator;
    this.lists.bankdetailList.sort = this.sort;
    this.resetbanktab();
    this.checkaccountnolength();
    this.common.ToastMessage("Success", "Bank Account Added Successfully");
  }
  resetbanktab() {
    this.checkactivityaddupdatebtn = true;
    this.thirdFormGroup.controls['bankname'].setValue('');
    this.thirdFormGroup.controls['accttype'].setValue('');
    this.thirdFormGroup.controls['ifsccode'].setValue('');
    this.thirdFormGroup.controls['accountno'].setValue('');
  }

  BankdetailEdit(ev) {
    this.checkactivityaddupdatebtn = false;
    if (ev) {
      this.thirdFormGroup.controls["bankname"].setValue(ev.bankname);
      this.thirdFormGroup.controls["accttype"].setValue(ev.accttype);
      this.thirdFormGroup.controls["ifsccode"].setValue(ev.ifsccode);
      this.thirdFormGroup.controls["accountno"].setValue(ev.accountno);
      this.copyofaccountname = ev.bankname;
      this.copyofaccountnumber = ev.accountno;
    }
  }
  Deletebankrecord(ele) {
    ele.bankname;
    ele.accountno;
    let arr = this.bankdetailListarray;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].bankname === ele.bankname && arr[i].accountno === ele.accountno) {
        var spliced = arr.splice(i, 1);
        this.bankdetailListarray = arr;
        this.common.ToastMessage("Success", "Bank Account Delete Successfully");
        this.checkaccountnolength();
      }
    }
    this.lists.bankdetailList = new MatTableDataSource(this.bankdetailListarray);
    this.lists.displayedColumns = ['BankName', 'AccountNo', 'IFSCCode', 'AccountType', 'Action'];
    this.lists.bankdetailList.paginator = this.paginator;
    this.lists.bankdetailList.sort = this.sort;
  }

  Updatebankdetail() {
    let arrvalue = this.bankdetailListarray;
    let filtervalue = arrvalue.filter(x => x.bankname == this.copyofaccountname && x.accountno == this.copyofaccountnumber);
    if (filtervalue) {
      filtervalue[0].bankname = this.thirdFormGroup.value.bankname;
      filtervalue[0].accountno = this.thirdFormGroup.value.accountno;
      filtervalue[0].accttype = this.thirdFormGroup.value.accttype;
      filtervalue[0].ifsccode = this.thirdFormGroup.value.ifsccode;
      this.common.ToastMessage("Success", "Bank Account Update Successfully");
      this.resetbanktab();
      this.checkactivityaddupdatebtn = true;
    } else {
      this.common.ToastMessage("Fail", "Bank Account Update Fail");
      this.checkactivityaddupdatebtn = false;
    }

  }


  //-------------------------------- create user end----------------------------------//

  /* checkPasswords(group: FormGroup) { // here we have the 'passwords' group
      let pass = group.get('password').value;
      let confirmPass = group.get('confirmpassword').value;
      return pass === confirmPass ? null : { notSame: true }
    }*/

  // GetUserList() {
  //   let UserId: any = 0;
  //   if (localStorage.getItem("UserType") != "Super Admin") {
  //     UserId = localStorage.getItem("UserId");
  //   }
  //   if (this.lists.adminid) {
  //     UserId = this.lists.adminid;

  //   }
  //   this.common.GetMethod("GetUserInfo?userid=" + UserId).then((res: any) => {
  //     this.Userlist = res.Data;
  //     this.Userlist.forEach(element => {
  //       element.adminid = parseInt(element.adminid);
  //       if (element.status == 0) {
  //         element.status = false;
  //       }
  //       if (element.status == 1) {
  //         element.status = true;
  //       }
  //       if (element.currentstatus == 0) {
  //         element.currentstatus = false;
  //       }
  //       if (element.currentstatus == 1) {
  //         element.currentstatus = true;
  //       }
  //     });
  //     this.newUserlist = new MatTableDataSource(this.Userlist);
  //     this.newUserlist.paginator = this.paginator;
  //     this.newUserlist.sort = this.sort;
  //   });
  // }

  // GetBranchlist(ev) {
  //   let branch = [];
  //   this.common.PostMethod("GetfilterData", { file: "branch", name: "name", value: ev.value }).then((res: any) => {
  //     if (localStorage.getItem('UserType') == 'Admin') {
  //       res.Data.forEach(element => {
  //         if (element.adminid == localStorage.getItem("UserId")) {
  //           branch.push(element);
  //         }
  //       });
  //       this.lists.branchlist = branch;
  //     } else {
  //       this.lists.branchlist = res.Data;
  //     }
  //   });
  // }

  // GetCitylist() {
  //   this.common.GetMethod('GetCitites').then((res: any) => {
  //     this.lists.Citylist = res.Data;
  //   });
  // }

  GetDocList() {
    this.common.GetMethod("GetDatatable?Name=kycdoc").then((res: any) => {
      this.lists.Doctype = res.Data;
    });
  }


  onFileChange(ev, type) {
    let filetype = ev.target.files[0]['type'];
    if (filetype == 'image/png' || filetype == 'image/jpg' || filetype == 'image/jpeg') {
      this.lists.Doctype[type].image = ev.target.value;
      this.common.fileUpload(ev.target.files, res => {
        this.lists.Doctype[type].image = this.common.Url + "Files/" + res.filename;
      });
    } else {
      this.common.ToastMessage("Fail", "Please Select Only Image Files png,jpg,jpeg Extension.");
    }
  }



  // UserRegistration() {
  //   //this.userform.controls['KYC'].setValue(this.lists.Doctype);
  //  // this.common.PostMethod("UserRegistration", this.userform.value).then((res: any) => {
  //     // if (res.Status == 1) {
  //     //   this.common.ToastMessage("Success", res.Message);
  //     //   this.userform.reset();
  //     //   this.userform.controls['aId'].setValue(localStorage.getItem("UserId"));
  //     //   this.userform.controls['amount'].setValue(0);
  //     //   this.GetDocList();
  //     //   this.GetUserList();
  //     // } else {
  //     //   this.common.ToastMessage("Fail", res.Message);
  //     // }
  //   //});
  // }
  // UpdateUserStatus(ev) {
  //   if (ev.status == false) {
  //     ev.status = 1;
  //   } else {
  //     ev.status = 0;
  //   }
  //   this.common.PostMethod("RecordUpdate", { file: "users", name: "id", value: ev.id, updatename: "status", updatevalue: ev.status }).then((res: any) => {
  //     if (res.Status == 1) {
  //       this.common.ToastMessage("Success", "User Status Change Successfully");
  //       this.GetUserList();
  //     } else {
  //       this.common.ToastMessage("Fail", "User Status Change Fail");
  //     }
  //   });
  // }

  // UpdateCurrentStatus(ev) {
  //   if (ev.currentstatus == false) {
  //     ev.currentstatus = 1;
  //   } else {
  //     ev.currentstatus = 0;
  //   }
  //   this.common.PostMethod("RecordUpdate", { file: "users", name: "id", value: ev.id, updatename: "currentstatus", updatevalue: ev.currentstatus }).then((res: any) => {
  //     if (res.Status == 1) {
  //       this.common.ToastMessage("Success", "User Current Login Status Change Successfully");
  //       this.GetUserList();
  //     } else {
  //       this.common.ToastMessage("Fail", "User Current Login Status Change Fail");
  //     }
  //   });
  // }

  // ProfileEdit(ev) {
  //   console.log(ev);
  //   this.lists.profileedit = true;
  //   this.lists.SelectedIndex = 0;
  //   this.GetBranchlist({ value: ev.cityname });
  //   this.userform.controls['name'].setValue(ev.name);
  //   this.userform.controls['mobile'].setValue(ev.mobile);
  //   this.userform.controls['branch'].setValue(parseInt(ev.branch));
  //   this.userform.controls['city'].setValue(ev.cityname);
  //   this.userform.controls['amount'].setValue(ev.PresentAmount);
  //   this.userform.controls['amount'].disable();
  //   this.userform.controls['usertype'].setValue(ev.usertype);
  //   this.userform.get('password').setValidators([]);
  //   this.userform.get('password').updateValueAndValidity();
  //   this.lists.nUserId = ev.id;
  //   if (ev.Bank) {
  //     this.userform.controls["bankname"].setValue(ev.Bank.bankname);
  //     this.userform.controls["accttype"].setValue(ev.Bank.accounttype);
  //     this.userform.controls["account"].setValue(ev.Bank.accountnumber);
  //     this.userform.controls["ifsccode"].setValue(ev.Bank.ifsc);
  //   }
  //   if (ev.KYC.length > 0) {
  //     this.lists.Doctype = ev.KYC;
  //   }
  // }

  // RegistrationUpdate() {
  //   this.userform.controls['KYC'].setValue(this.lists.Doctype);
  //   this.userform.controls['id'].setValue(parseInt(this.lists.nUserId));
  //   this.common.PostMethod("UserRegistration", this.userform.value).then((res: any) => {
  //     if (res.Status == 1) {
  //       this.common.ToastMessage("Success", res.Message);
  //       this.userform.reset();
  //       this.userform.controls['aId'].setValue(localStorage.getItem("UserId"));
  //       this.userform.controls['amount'].setValue(0);
  //       this.userform.controls['id'].setValue(0);

  //       this.GetDocList();
  //       this.GetUserList();
  //     } else {
  //       this.common.ToastMessage("Fail", res.Message);
  //     }
  //   });
  // }
  // Changetab(ev) {
  //   console.log(ev);
  // }


}
