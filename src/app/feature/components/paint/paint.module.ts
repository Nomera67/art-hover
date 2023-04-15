import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintRoutingModule } from './paint-routing.module';
import { PaintComponent } from './paint.component';
import { LoaderModule } from 'src/app/shared/components/loader/loader.module';


@NgModule({
  declarations: [
    PaintComponent
  ],
  imports: [
    CommonModule,
    PaintRoutingModule,
    LoaderModule
  ]
})
export class PaintModule { }
