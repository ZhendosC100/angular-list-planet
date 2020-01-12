import { Pipe, PipeTransform } from '@angular/core';
import {PlanetList} from '../home-page/home-page.component';


@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(planets: PlanetList[], searchText: string = ''): any {
    if (!searchText.trim()) {
      return planets;
    }
    return planets.filter(planet => {
      return planet.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
