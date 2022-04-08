import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WorkmanagerRoutes } from './workmanager.routing';
import { DemoMaterialModule } from '../../demo-material-module';
import { MyworkComponent } from './mywork/mywork.component';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PipeModule } from './../Pipes/pipe/pipe.module';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WorkmanagerRoutes),
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    
  ],
  declarations: [
    MyworkComponent,
    SettingComponent
  ]
})
export class WorkManagerModule {}
