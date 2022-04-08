import { OtpComponent } from './../otp/otp.component';
import { NgOtpModule } from 'ng-otp';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../../Pipes/pipe/pipe.module';
import { ConfirmboxComponent } from '../confirmbox/confirmbox.component';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';


@NgModule({
  declarations: [
    ConfirmboxComponent,
    ChangepasswordComponent,
    OtpComponent
  ],
  entryComponents: [],
  imports: [
    PipeModule,
    CommonModule,   
  ],
  exports: [
  ]
  
})
export class DailogModule { }
