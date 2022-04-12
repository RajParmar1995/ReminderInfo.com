
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { AppBreadcrumbComponent } from './layouts/full/breadcrumb/breadcrumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { NgOtpModule } from 'ng-otp';
import { OtpComponent } from './Portal/Dailogbox/otp/otp.component';
import { ConfirmboxComponent } from './Portal/Dailogbox/confirmbox/confirmbox.component';
import { ChangepasswordComponent } from './Portal/Dailogbox/changepassword/changepassword.component';

import { ToastrModule } from 'ng6-toastr-notifications';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { MatCommonModule } from '@angular/material';
import { SettingsComponent } from './Workmanager/settings/settings.component';
import { UserdetailComponent } from './Portal/Dailogbox/userdetail/userdetail.component';
import { PipeModule } from './Portal/Pipes/pipe/pipe.module';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppBlankComponent,
    AppSidebarComponent,
    AppBreadcrumbComponent,
    ConfirmboxComponent,
    OtpComponent,
    ChangepasswordComponent,
  //  BillfetchComponent,
    SettingsComponent,
    UserdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    PerfectScrollbarModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgOtpModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    NgxUiLoaderModule,
    ReactiveFormsModule,
    FormsModule,
    PipeModule,
    MatCommonModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  entryComponents: [ConfirmboxComponent, OtpComponent, ChangepasswordComponent,UserdetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
