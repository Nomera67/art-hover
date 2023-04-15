import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleryRoutingModule } from './galery-routing.module';
import { GaleryComponent } from './galery.component';
import { LoaderModule } from 'src/app/shared/components/loader/loader.module';


@NgModule({
  declarations: [
    GaleryComponent
  ],
  imports: [
    CommonModule,
    GaleryRoutingModule,
    LoaderModule
  ]
})
export class GaleryModule { }
