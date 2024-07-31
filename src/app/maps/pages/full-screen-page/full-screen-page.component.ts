import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Map} from 'mapbox-gl'; 



@Component({
  selector: 'fullscreen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit{

  @ViewChild('map') public mapaFullScreen?: ElementRef;

  ngAfterViewInit(): void {

    if(!this.mapaFullScreen) throw 'El elemento HTML es requerido';


    const map = new Map({
	  container: this.mapaFullScreen.nativeElement, // container ID
	  style: 'mapbox://styles/mapbox/streets-v12', // style URL
	  center: [-74.5, 40], // starting position [lng, lat]
	  zoom: 9, // starting zoom
});
  }

}
