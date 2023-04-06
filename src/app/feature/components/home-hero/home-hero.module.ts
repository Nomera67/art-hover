import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeHeroRoutingModule } from './home-hero-routing.module';
import { HomeHeroComponent } from './home-hero.component';
import { CardGameModule } from './card-game/card-game.module';


@NgModule({
  declarations: [
    HomeHeroComponent,
  ],
  imports: [
    CommonModule,
    HomeHeroRoutingModule,
    CardGameModule
  ],
  
})
export class HomeHeroModule { }
