import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGameComponent } from './card-game.component';
import { CardGameRoutingModule } from './card-game-routing.module';
import { LoaderModule } from 'src/app/shared/components/loader/loader.module';

@NgModule({
  declarations: [
    CardGameComponent,
  ],
  imports: [
    CommonModule,
    CardGameRoutingModule,
    LoaderModule
  ],
  exports: [
    CardGameComponent
  ]
})
export class CardGameModule { }
