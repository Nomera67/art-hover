import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeHeroRoutingModule } from './home-hero-routing.module';
import { HomeHeroComponent } from './home-hero.component';


@NgModule({
  declarations: [
    HomeHeroComponent
  ],
  imports: [
    CommonModule,
    HomeHeroRoutingModule
  ]
})
export class HomeHeroModule { }
