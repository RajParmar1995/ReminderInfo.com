import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CommonService} from '../../Service/common.service'

@Component({
  selector: 'app-reminderinfodailog',
  templateUrl: './reminderinfodailog.component.html',
  styleUrls: ['./reminderinfodailog.component.css']
})
export class ReminderinfodailogComponent implements OnInit {

  columwidth ="33.33";
  constructor( private common :CommonService, private dialogRef: MatDialogRef<ReminderinfodailogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {

   }
  ngOnInit() {
    this.getreminderdata();
  }

  getreminderdata(){
    if(this.data.status == true){
      debugger
    }
  }

  closeModal() {
    this.dialogRef.close();
  }
}
