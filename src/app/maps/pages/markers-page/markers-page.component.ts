import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';
import { MarkerAndColor } from '../../interfaces/marker.interface';
import { PlainMarker } from '../../interfaces/plain-marker.inteface';



@Component({
  selector: 'markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {

  @ViewChild('map') public mapaFullScreen?: ElementRef;
  public markers: MarkerAndColor[] =[];

  public zoom:number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-70.77891080507965, 19.527304530758855);


  ngAfterViewInit(): void {

    if(!this.mapaFullScreen) throw 'El elemento HTML es requerido';

    this.map = new Map({
	  container: this.mapaFullScreen.nativeElement, // container ID
	  style: 'mapbox://styles/mapbox/streets-v12', // style URL
	  center: this.currentLngLat,
	  zoom: 13, 
    });

    // const markerHtml = document.createElement('div');
    // const marker = new Marker({

    // })
    // .setLngLat(this.currentLngLat)
    // .addTo(this.map)
    this.loadLocalStorage()
  }

  createMarker(){
    if( !this.map ) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
    
  }

  addMarker(lngLat: LngLat, color: string ){
    if( !this.map ) return;

    const marker = new Marker({
      color: color,
      draggable: true
    })
    .setLngLat(lngLat)
    .addTo(this.map);

    this.markers.push({
      color: color,
      marker: marker
    });

    this.saveToLocalStorage();

    marker.on('dragend', () =>{
      
    this.saveToLocalStorage();
    })
  }


  deleteMarker(index: number){
    this.markers[index].marker.remove()

    this.markers.splice(index, 1);
  }


  flyTo(marker: Marker){
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    })

  }

  saveToLocalStorage(){

    const plainMarker: PlainMarker[] = this.markers.map(({color, marker}) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    });
    
    localStorage.setItem('plainMarkers', JSON.stringify(plainMarker))
  }


  loadLocalStorage(){
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarker: PlainMarker[] = JSON.parse(plainMarkersString);

    plainMarker.forEach(({color, lngLat}) =>{

      const [lng, lat ] = lngLat;
      const coords = new LngLat(lng, lat);
      this.addMarker(coords, color)

    })
  }


}
