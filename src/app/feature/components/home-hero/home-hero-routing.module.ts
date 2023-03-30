import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeHeroComponent } from './home-hero.component';

const routes: Routes = [{ path: '', component: HomeHeroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeHeroRoutingModule { }
