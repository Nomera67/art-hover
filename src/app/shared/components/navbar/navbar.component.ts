import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private _router: Router){}
  
  //toggle to on/off navbar
  toggleNav(){
    const primaryNav = document.getElementById("primary-navigation");
    const toggleButton = document.getElementById('toggleButton');
    if(primaryNav?.getAttribute("data-visible") === "false"){ //if navbar is not visible
      primaryNav.setAttribute("data-visible", "true"); //let it appear with the attribute
      toggleButton?.setAttribute("aria-expanded", "true"); //and tell it to screen readers
    } else {
      primaryNav?.setAttribute("data-visible", "false"); //else let it disappear with removing the attribute
      toggleButton?.setAttribute("aria-expanded", "false") //and tell it to screen readers
    }
  }

  homecoming(){
    this._router.navigate(['/'])
  }

  backgroundMove(){
    const primaryNav = document.getElementById("primary-navigation");
    const items = Array.from(document.querySelectorAll(".nav__item"));
    items.forEach((item, index) => { //For each item of the navbar, use his index
      item.addEventListener("mouseover", () => { //if the mouse is over it
        primaryNav?.setAttribute("data-active-index", index.toString()); //use his index into the data-active-index of the primary navigation bar 
      })
    })
  }

  hideMenu(){
    const arrow = document.getElementById("arrowControl");
    const header = document.getElementById("headerMenu");
    if(header?.getAttribute("data-visible") === "true") {
      header.setAttribute("data-visible", "false");
      arrow?.setAttribute("aria-expanded", "false");
    } else {
      header?.setAttribute("data-visible", "true");
      arrow?.setAttribute("aria-expanded", "true");
    }
  }

}
