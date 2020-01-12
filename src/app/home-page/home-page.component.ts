import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlanetList , PlanetService } from '../planet.service';

//export interface PlanetList {
  //name: string;
  //rotation_period: number;
  //orbital_period: number;
  //diameter: number;
  //climate: string;
  //gravity: any;
  //terrain: string;
  //surface_water: number;
  //population: number;

//}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  title = 'planets';
  searchText = '';
  planets: PlanetList[] = [];
  pSlice: PlanetList[] = [];
  test = '';
  info: any = {};
  constructor(private planetService: PlanetService , private http: HttpClient) {
  }

  ngOnInit() {
    //console.log(this.planetService);
  this.planetService.addPlanets()
    .subscribe(response => {

      this.info = response;
      this.planets = this.info.results;
      });

    //this.http.get('https://swapi.co/api/planets/')
      //.subscribe(response => {

        //this.info = response;
        //this.planets = this.info.results;
      //});

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


}
