import { Component } from '@angular/core';
import { House } from '../../interfaces/properties.interface';

@Component({
  selector: 'properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public houses: House[] = [
    {
      title: 'WGR Solutions',
      description: 'Empresa de desarrollo de software',
      lngLat: [-70.6843353,19.458413]

    },
    {
      title: 'Colinas Mall',
      description: 'Centro Comercial y Multinivel',
      lngLat: [-70.7168403,19.4733567]

    },
    {
      title: 'Centro León',
      description: 'Centro cultural Leon Jimenez.',
      lngLat: [-70.6734384,19.4641228,]
    },
    {
      title: 'Pizza Getto',
      description: 'Pizzeria Getto, Padre Las Casas',
      lngLat: [-70.7225303,19.4484117]

    },
    {
      title: 'Estadio Cibao',
      description: 'El mejor estadio de la Republica Dominicana',
      lngLat: [-70.7116341,19.4670778]

    },
    {
      title: 'Casa residencial, Canadá',
      description: 'Bella propiedad en Katana, Canadá',
      lngLat: [ -75.92722289474008, 45.280015511264466]
    },
    {
      title: 'Casa de playa, México',
      description: 'Hermosa casa de playa en Acapulco, México',
      lngLat: [ -99.91287720907991, 16.828940930185748]
    },
    {
      title: 'Apartamento, Argentina',
      description: 'Apartamento en el corazón de Buenos Aires, Argentina',
      lngLat: [ -58.430166677283445, -34.57150108832866 ]
    },
    {
      title: 'Local comercial, España',
      description: 'Comercial disponible en Madrid, España.',
      lngLat: [ -3.7112735618380177, 40.42567285425766 ]
    },
  ]

}
