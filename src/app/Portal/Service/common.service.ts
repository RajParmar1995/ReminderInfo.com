import { Router, NavigationExtras } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Headers} from '@angular/http';
import { ConfirmboxComponent } from '../Dailogbox/confirmbox/confirmbox.component';
import { MatDialog } from '@angular/material';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as moment from 'moment';



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  Url: any = "https://localhost:44340/api/";

  // headers:any = new Headers({
  //   'Content-Type': 'application/json',
  //   'Authorization': `Bearer ${localStorage.getItem("Token")}`
  // })

  InsuranceType: any = [
    // {id:1,insType:"birthday"},
    {id:2,insType:"Health Insurance"},
    {id:3,insType:"Personal Accident Insurance"},
    {id:4,insType:"Corporate Health Insurance"},
    {id:5,insType:"Car Insurance"},
    {id:6,insType:"Bike Insurance"},
    {id:7,insType:"Truck Insurance"},
    {id:8,insType:"Home Insurance"},
    {id:9,insType:"Shop Insurance"},
    {id:10,insType:"other Insurance/Policy"},
    // {id:11,insType:"meeting"},
  ]

  PaymentCycle: any = [
    {id:1,payCycName:"Monthly",val:1},
    {id:2,payCycName:"Quarterly",val:3},
    {id:3,payCycName:"Semi-annually",val:6},
    {id:4,payCycName:"Annually",val:12},
  ]

  constructor(private ngxService: NgxUiLoaderService, public dialog: MatDialog, public http: HttpClient, public router: Router, public toastr: ToastrManager) { }

  LoginMethod(Data) {
    // this.CheckTimeAuth();
    this.ngxService.start();
    return new Promise((resolve, reject) => {
      this.http
        .post(this.Url+"Auth/login",Data, { headers: {'Content-Type': 'application/json'}})
        .subscribe(
          res => {
            this.ngxService.stop();
            resolve(res);
          },
          err => {
            // if (err.status == 401) {
            //   this.logout();
            // }
            this.ngxService.stop();
            reject(err);
          }
        );
    });
  }

  GetMethod(MapUrl) {
    // this.CheckTimeAuth();
    return new Promise((resolve, reject) => {
      this.http.get(this.Url + MapUrl, {headers :{Authorization: `Bearer ${localStorage.getItem("Token")}`}}).subscribe(
        res => {
          resolve(res);
        },
        err => {
          if (err.status == 401) {
            this.logout();
          }
          reject(err);
        }
      );
    });
  }

  PostMethod(MapUrl, Data) {
    // this.CheckTimeAuth();
    this.ngxService.start();
    return new Promise((resolve, reject) => {
      this.http
        .post(this.Url + MapUrl, Data, {headers :{Authorization: `Bearer ${localStorage.getItem("Token")}`}})
        .subscribe(
          res => {
            this.ngxService.stop();
            resolve(res);
          },
          err => {
            if (err.status == 401) {
              this.logout();
            }
            this.ngxService.stop();
            reject(err);
          }
        );
    });
  }
  PutMethod(MapUrl, Data) {
    // this.CheckTimeAuth();
    this.ngxService.start();
    return new Promise((resolve, reject) => {
      this.http
        .put(this.Url + MapUrl, Data, {headers :{Authorization: `Bearer ${localStorage.getItem("Token")}`}})
        .subscribe(
          res => {
            this.ngxService.stop();
            resolve(res);
          },
          err => {
            if (err.status == 401) {
              this.logout();
            }
            this.ngxService.stop();
            reject(err);
          }
        );
    });
  }
  PatchMethod(MapUrl,Data) {
    // this.CheckTimeAuth();
    this.ngxService.start();
    return new Promise((resolve, reject) => {
      this.http
        .patch(this.Url + MapUrl, Data,{headers :{Authorization: `Bearer ${localStorage.getItem("Token")}`}})
        .subscribe(
          res => {
            this.ngxService.stop();
            resolve(res);
          },
          err => {
            if (err.status == 401) {
              this.logout();
            }
            this.ngxService.stop();
            reject(err);
          }
        );
    });
  }

  logout() {
    this.ngxService.start();
    // this.PostMethod("RecordUpdate", { file: "users", name: "id", value: localStorage.getItem("UserId"), updatename: "currentstatus", updatevalue: 0 }).then((res: any) => {
    //   this.PostMethod("RecordUpdate", { file: "users", name: "id", value: localStorage.getItem("UserId"), updatename: "fcid", updatevalue: 0 }).then((res: any) => { });
      localStorage.clear();
      this.ngxService.stop();
      this.router.navigate(["authentication/login"]);
    // });
  }

  fileUpload(ev, Callback) {
    let file = new FormData();
    file.append('file', ev[0]);
    this.PostMethod("RawFile", file).then((res: any) => {
      console.log(res);
      if (res.Status == 1) {
        Callback({ Status: true, filename: res.Filename });
      } else {
        Callback({ Status: false });
      }
    });
  }

  ToastMessage(Type, Message) {
    if (Type == "Success") {
      this.toastr.successToastr(Message, Type);
    } else {
      this.toastr.errorToastr(Message, Type);
    }
  }

  ConfirmMessage(Message, Callback) {
    let dialogRef = this.dialog.open(ConfirmboxComponent, {
      data: { Message: Message }
    });
    dialogRef.afterClosed().subscribe(result => {
      Callback(result);
    });
  }


  TableFilter(dataSource, filterValue) {
    dataSource.filter = filterValue.trim().toLowerCase();
  }

  DownloadCsv(reportname, data) {
    const replacer = (key, value) => value === null ? '' : value;
    const header = Object.keys(data[0]);
    let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');
    var blob = new Blob([csvArray], { type: 'text/csv' });
    let Filename = reportname + " " + new Date().valueOf();
    saveAs(blob, Filename + ".csv");
  }

  CheckTimeAuth() {
    let Resent: any = new Date();
    Resent = moment(Resent).format("YYYY-MM-DD HH:mm:ss");
    if (!localStorage.getItem("ProcessTime")) {
      localStorage.setItem("ProcessTime", Resent);
    }
    let ProcessTime = moment(localStorage.getItem("ProcessTime")).format("YYYY-MM-DD HH:mm:ss");
    let a = moment(Resent);
    let b = moment(ProcessTime);
    let result = a.diff(b, 'minutes');
    if (result > 15) {
      localStorage.setItem("ProcessTime", Resent);
      let Options: NavigationExtras = {
        queryParams: { Url: window.location.href }
      }
      if (localStorage.getItem("UserId")) {
        this.router.navigate(['authentication/lockscreen'], Options);
      }
    } else {
      localStorage.setItem("ProcessTime", Resent);
    }
  }

}
