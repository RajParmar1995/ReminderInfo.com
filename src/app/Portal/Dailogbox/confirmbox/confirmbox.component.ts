import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmbox',
  templateUrl: './confirmbox.component.html',
  styleUrls: ['./confirmbox.component.css']
})
export class ConfirmboxComponent implements OnInit {
  lists: any = {};
  constructor(public dialogRef: MatDialogRef<ConfirmboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.lists.Message = data.Message;
  }
 
  ngOnInit() {
  }
  onClick(ev) {
    this.dialogRef.close(ev);
  }
  
}
