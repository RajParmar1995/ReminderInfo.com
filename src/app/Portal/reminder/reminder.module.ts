import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReminderRoutes } from './reminder.routing';
import { DemoMaterialModule } from '../../demo-material-module';
import { AllreminderComponent } from './allreminder/allreminder.component';
import { CreatereminderComponent } from './createreminder/createreminder.component';
import { PipeModule} from '../Pipes/pipe/pipe.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ReminderRoutes),
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule
  ],
  declarations: [
    AllreminderComponent,
    CreatereminderComponent
  ]
})
export class ReminderModule {}
