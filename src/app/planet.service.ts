import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) {}
  addPlanets(): Observable<PlanetList[]> {
   return this.http.get<PlanetList[]>('https://swapi.co/api/planets/');
  }

}
