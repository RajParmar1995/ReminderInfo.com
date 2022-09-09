import { Component, ElementRef, Inject, OnInit, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { EncriptionService } from '../../Service/encription.service';

import * as jquery from 'jquery';

@Component({
  selector: 'app-meetingdetail',
  templateUrl: './meetingdetail.component.html',
  styleUrls: ['./meetingdetail.component.css']
})
export class MeetingdetailComponent implements OnInit {

  //@ViewChild('inputval1') inputval1: ElementRef;
  hide = true;
  columwidth = "100";
  rowwidth90 = "100";
  rowwidth10 = "10";
  list: any = {};

  constructor(
    private ency: EncriptionService,
    private dialogRef: MatDialogRef<MeetingdetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.MeetingDetail();
  }

  MeetingDetail() {
    if (this.data.status == true) {
      var dataarray = this.data.val;
      let meetingdetail = '';
      let detailarray = [];
      if (dataarray.notes) {
        //meetingdetail = this.ency.decryptUsingAES256(dataarray.notes).split('*dvd*');
        meetingdetail = dataarray.notes.split('*dvd*');
        for (let i = 0; i < meetingdetail.length; i++) {
          let keyval: any = meetingdetail[i].split('*eql*');
          detailarray.push(JSON.parse(`{"${keyval[0]}" : "${keyval[1]}"}`));
        }
      }

      if (detailarray.length > 0) {
        this.list.MeetingUrl = (detailarray.filter(e => Object.keys(e).toString() == 'MUrl').length > 0 ? detailarray.filter(e => Object.keys(e).toString() == 'MUrl')[0].MUrl : '');

        this.list.MeetingId = (detailarray.filter(e => Object.keys(e).toString() == 'MId').length > 0 ? detailarray.filter(e => Object.keys(e).toString() == 'MId')[0].MId : '');

        this.list.UserId = (detailarray.filter(e => Object.keys(e).toString() == 'MUId').length > 0 ? detailarray.filter(e => Object.keys(e).toString() == 'MUId')[0].MUId : '');

        this.list.PassCode = (detailarray.filter(e => Object.keys(e).toString() == 'MPC').length > 0 ? detailarray.filter(e => Object.keys(e).toString() == 'MPC')[0].MPC : '');

        this.list.Details = (detailarray.filter(e => Object.keys(e).toString() == 'ED').length > 0 ? detailarray.filter(e => Object.keys(e).toString() == 'ED')[0].ED : '');
      }
    }
  }

  textcopy(val: any) {
    let sampleTextarea = document.createElement("textarea");
    document.body.appendChild(sampleTextarea);
    sampleTextarea.value = val;
    sampleTextarea.select();
    document.execCommand("copy");
  }

  closeModal() {
    this.dialogRef.close();
  }

}
