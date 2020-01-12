import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface PlanetList {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: any;
  terrain: string;
  surface_water: number;
  population: number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'planets';
  searchText = '';
  planets: PlanetList[] = [];
  pSlice: PlanetList[] = [];
  test = '';
  info: any = {};
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://swapi.co/api/planets/')
      .subscribe(response => {

        this.info = response;
        this.planets = this.info.results;
      });
  }

  sliceNumber(index) {
    console.log(index);
    //console.log(this.info);
    this.test = this.info.next.slice(0, -1) + 5;
    console.log(this.test);

    for (let i = 2; i < index; i++) {
      this.test = this.info.next.slice(0, -1) + i;
      this.http.get(this.test)
        .subscribe(response => {

          this.info = response;
          console.log(this.info.results);
          this.planets = this.planets.concat(this.info.results);
        });
    }
    //this.pSlice = this.planets.slice(0, 5);
    //this.planets = this.pSlice;
    //console.log(this.pSlice);
  }

  // planets: PlanetList[] = [
  //   {
  //     name: 'Corellia',
  //     rotation_period: 25,
  //     orbital_period: 329,
  //     diameter: 11000,
  //     climate: 'Temperate',
  //     gravity: '1 standart',
  //     terrain: 'plains, urban, hills, forests',
  //     surface_water: 70,
  //     population: 3000000000
  //   },
  //
  //   {
  //     name: 'Beer Station',
  //     rotation_period: 25,
  //     orbital_period: 329,
  //     diameter: 11000,
  //     climate: 'Hard',
  //     gravity: '0.5 standart',
  //     terrain: 'plains, urban, hills, forests',
  //     surface_water: 80,
  //     population: 3000000000
  //   },
  //
  //   {
  //     name: 'Corellia',
  //     rotation_period: 25,
  //     orbital_period: 329,
  //     diameter: 11000,
  //     climate: 'Temperate',
  //     gravity: '1 standart',
  //     terrain: 'plains, urban, hills, forests',
  //     surface_water: 70,
  //     population: 3000000000
  //   },
  //
  // ]
}
