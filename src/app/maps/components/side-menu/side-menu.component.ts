import { Component } from '@angular/core';

interface MenuItems {
  route : string;
  name: string;
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItems[] =[
    {route: '/maps/fullscreen', name: 'FullScreen'},
    {route: '/maps/zoom-range', name: 'ZoomRange'},
    {route: '/maps/markers', name: 'Markers'},
    {route: '/maps/properties', name: 'Properties'},
  ]

}
