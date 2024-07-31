import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl'
@Component({
  selector: 'zoom-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{
  

  @ViewChild('map') public mapaFullScreen?: ElementRef;

  public zoom:number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-70.75378221640403, 19.62042524309915);



  ngAfterViewInit(): void {

    if(!this.mapaFullScreen) throw 'El elemento HTML es requerido';

    this.map = new Map({
	  container: this.mapaFullScreen.nativeElement, // container ID
	  style: 'mapbox://styles/mapbox/streets-v12', // style URL
	  center: this.currentLngLat, // starting position [lng, lat]
	  zoom: this.zoom, // starting zoom
    });
    this.mapListener()
  }


  mapListener(){

    if(!this.map) throw 'El mapa no se ha inicializado';

    this.map.on('zoom', () =>{
      this.zoom = this.map!.getZoom();
      
    });

    this.map.on('zoomend', () =>{
      if(this.map!.getZoom() < 18 ) return;

      this.map?.zoomTo(18)
    });

    this.map.on('move', () =>{
      this.currentLngLat = this.map!.getCenter()

    })
  }

  zoomIn(){

    this.map?.zoomIn()

  }

  zoomOut(){

    this.map?.zoomOut()
  }

  zoomChangeInput(value : string){
    this.zoom = Number(value)
    this.map?.zoomTo(this.zoom)
  }


  ngOnDestroy(): void {
    this.map?.remove()
  }
  
}
