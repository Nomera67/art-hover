import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintRoutingModule } from './paint-routing.module';
import { PaintComponent } from './paint.component';


@NgModule({
  declarations: [
    PaintComponent
  ],
  imports: [
    CommonModule,
    PaintRoutingModule
  ]
})
export class PaintModule { }
