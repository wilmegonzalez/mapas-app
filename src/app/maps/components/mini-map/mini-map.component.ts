import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker} from 'mapbox-gl';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit{

  @ViewChild('map') public mapa?: ElementRef;
  @Input() lngLat?: [number, number];


  ngAfterViewInit(): void {

    if(!this.mapa) throw 'Se requiere el mapa';
    if(!this.lngLat ) throw 'Las propiedades lngLat no pueden estar vacias';

    const map = new Map({
      container: this.mapa?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: 15,
      interactive: false
    })

    new Marker()
    .setLngLat(this.lngLat)
    .addTo(map)

  }

}
