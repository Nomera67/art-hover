import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationsRoutingModule } from './informations-routing.module';
import { InformationsComponent } from './informations.component';
import { AuthorComponent } from './author/author.component';
import { MuseumComponent } from './museum/museum.component';
import { WebsiteComponent } from './website/website.component';
import { IntroductionComponent } from './introduction/introduction.component';


@NgModule({
  declarations: [
    InformationsComponent,
    AuthorComponent,
    MuseumComponent,
    WebsiteComponent,
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    InformationsRoutingModule
  ]
})
export class InformationsModule { }
