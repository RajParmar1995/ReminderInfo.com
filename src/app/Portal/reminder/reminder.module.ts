import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from '../../demo-material-module';
import { PipeModule} from '../Pipes/pipe/pipe.module'
import { CreatereminderComponent } from './createreminder/createreminder.component';
import { AllreminderComponent } from './allreminder/allreminder.component';
import { ReminderRoutes } from './reminder.routing';

@NgModule({
  declarations: [
    CreatereminderComponent,
     AllreminderComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(ReminderRoutes),
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    CreatereminderComponent,
    AllreminderComponent
  ] 
})
export class ReminderModule { }
