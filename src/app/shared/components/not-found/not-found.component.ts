import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(public _router: Router){}

  toHome(){
    this._router.navigate(['/']);
  }

  toGallery(){
    this._router.navigate(['/gallery'])
  }

  toAbout(){
    this._router.navigate(['/informations'])
  }

}
