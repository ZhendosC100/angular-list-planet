import { Component, OnInit, Input } from '@angular/core';
import { PlanetList } from '../home-page/home-page.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.sass']
})
export class PlanetsComponent implements OnInit {

  constructor() { }
  @Input() planet: PlanetList
  ngOnInit() {
  }
  toDetails() {
    console.log(this.planet.name);
  }
}
