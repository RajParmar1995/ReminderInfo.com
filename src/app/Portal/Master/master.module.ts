import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DemoMaterialModule } from '../../demo-material-module';

import { MasterRoutes } from './master.routing';
import { MastermanagerComponent } from './mastermanager/mastermanager.component';
import { ServicemasterComponent } from './servicemaster/servicemaster.component';
import { AreamasterComponent } from './areamaster/areamaster.component';
import { UserrolemasterComponent } from './userrolemaster/userrolemaster.component';
import { KycmasterComponent } from './kycmaster/kycmaster.component';
import { SubscriptionmasterComponent } from './subscriptionmaster/subscriptionmaster.component';
import { TaxmasterComponent } from './taxmaster/taxmaster.component';
import { ComplainmasterComponent } from './complainmaster/complainmaster.component';
import { StatusmasterComponent } from './statusmaster/statusmaster.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MasterRoutes),
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
   MastermanagerComponent,
   ServicemasterComponent,
   AreamasterComponent,
   UserrolemasterComponent,
   KycmasterComponent,
   SubscriptionmasterComponent,
   TaxmasterComponent,
   ComplainmasterComponent,
   StatusmasterComponent,
  ]
})
export class MasterModule {}
