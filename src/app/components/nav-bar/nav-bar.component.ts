import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  nav__links:{}[] =[
    {
      path : "home",
      display:"Home"
    },
    {
      path : "shop",
      display:"Shop"
    },
    {
      path : "cart",
      display:"Cart"
    }
  ]
}
