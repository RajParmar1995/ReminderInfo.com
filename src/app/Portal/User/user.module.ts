import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserRoutes } from './user.routing';
import { DemoMaterialModule } from '../../demo-material-module';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProfileComponent } from './profile/profile.component';
import { PipeModule} from '../Pipes/pipe/pipe.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule
  ],
  declarations: [
   CreateuserComponent,
   UserlistComponent,
   ProfileComponent
  ]
})
export class UserModule {}
