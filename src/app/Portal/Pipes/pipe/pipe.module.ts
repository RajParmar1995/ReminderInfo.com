import { MenufilterPipe } from './../menufilter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectfilterPipe } from './selectfilter.pipe';
import { LimittoPipe } from '../limitto.pipe';
import { MonthtoyearPipe } from '../monthtoyear.pipe';
import { ArraylengthPipe } from '../arraylength.pipe';




@NgModule({
  declarations: [MenufilterPipe, SelectfilterPipe,LimittoPipe,MonthtoyearPipe,ArraylengthPipe],
  imports: [
    CommonModule
  ],
  exports: [MenufilterPipe, SelectfilterPipe,LimittoPipe,MonthtoyearPipe,ArraylengthPipe]
})
export class PipeModule { }
