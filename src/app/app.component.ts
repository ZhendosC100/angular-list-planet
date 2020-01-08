import { Component,  OnChanges, SimpleChanges} from '@angular/core';
export interface PlanetList {
  name: string
  rotation_period: number
  orbital_period: number
  diameter: number
  climate: string
  gravity: any
  terrain: string
  surface_water: number
  population: number

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


// export class AppComponent implements OnChanges {
export class AppComponent {
  title = 'planets';
  planets: PlanetList[] = [
    {
      name: 'Corellia',
      rotation_period: 25,
      orbital_period: 329,
      diameter: 11000,
      climate: 'Temperate',
      gravity: '1 standart',
      terrain: 'plains, urban, hills, forests',
      surface_water: 70,
      population: 3000000000
    },

    {
      name: 'Beer Station',
      rotation_period: 25,
      orbital_period: 329,
      diameter: 11000,
      climate: 'Hard',
      gravity: '0.5 standart',
      terrain: 'plains, urban, hills, forests',
      surface_water: 80,
      population: 3000000000
    },

    {
      name: 'Corellia',
      rotation_period: 25,
      orbital_period: 329,
      diameter: 11000,
      climate: 'Temperate',
      gravity: '1 standart',
      terrain: 'plains, urban, hills, forests',
      surface_water: 70,
      population: 3000000000
    },
    
  ]

  // ngOnChanges(changes: SimpleChanges):void {
  //   console.log('ngOnchanges', changes)
  // }
  searchFilter(namePlanet: string){
    const newPlanets: PlanetList[] = this.planets
    console.log(namePlanet.length)
    if(namePlanet.length < 2){
      this.planets = newPlanets
    }else {
      
      // for(let pName of this.planets){
      //   pName.filter((item)=>{})
      // }
      this.planets=this.planets.filter((item) => item.name == namePlanet)
      
    }
    
  // }
}
