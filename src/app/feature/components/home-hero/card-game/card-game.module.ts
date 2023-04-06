import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGameComponent } from './card-game.component';
import { CardGameRoutingModule } from './card-game-routing.module';

@NgModule({
  declarations: [
    CardGameComponent,
  ],
  imports: [
    CommonModule,
    CardGameRoutingModule
  ],
  exports: [
    CardGameComponent
  ]
})
export class CardGameModule { }
