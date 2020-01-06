import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

// export interface PlanetList {
//   name: string,
//   rotation_period: number,
//   orbital_period: number,
//   diameter: number,
//   climate: string,
//   gravity: any,
//   terrain: string,
//   surface_water: string,
//   population: number

// }

export class AppComponent {
  title = 'planets';
}
