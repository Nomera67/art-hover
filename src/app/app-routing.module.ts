import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./feature/components/home-hero/home-hero.module').then(m => m.HomeHeroModule) },
  { path: 'galery', loadChildren: () => import('./feature/components/galery/galery.module').then(m => m.GaleryModule) },
  { path: 'informations', loadChildren: () => import('./feature/components/informations/informations.module').then(m => m.InformationsModule) },
  { path: '**', loadChildren: () => import('./shared/components/not-found/not-found.module').then(m => m.NotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
