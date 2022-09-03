import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { EncriptionService } from '../../Service/encription.service';

@Component({
  selector: 'app-meetingdetail',
  templateUrl: './meetingdetail.component.html',
  styleUrls: ['./meetingdetail.component.css']
})
export class MeetingdetailComponent implements OnInit {
  columwidth = "25";
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
        meetingdetail = this.ency.decryptUsingAES256(dataarray.notes).split('*dvd*');
        for (let i = 0; i < meetingdetail.length; i++) {
          let keyval: any = meetingdetail[i].split('*eql*');
          detailarray.push(JSON.parse(`{"${keyval[0]}" : "${keyval[1]}"}`));
        }
      }

      if (detailarray.length > 0) {
        this.list.MeetingUrl.setValue(detailarray.filter(e => Object.keys(e).toString() == 'MUrl')[0].MUrl);
        this.list.MeetingId.setValue(detailarray.filter(e => Object.keys(e).toString() == 'MId')[0].MId);
        this.list.UserId.setValue(detailarray.filter(e => Object.keys(e).toString() == 'MUId')[0].MUId);
        this.list.PassCode.setValue(detailarray.filter(e => Object.keys(e).toString() == 'MPC')[0].MPC);
        this.list.Details.setValue(detailarray.filter(e => Object.keys(e).toString() == 'ED')[0].ED);
      }
    }
  }

  closeModal() {
    this.dialogRef.close();
  }

}
