import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PlanetList , PlanetService } from '../planet.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  loading = false;
  detailPlanet: any = [];
  sDetail: PlanetList[] = [];
  infoName: any = {};
  test = 'https://swapi.co/api/planets/?page=';
  info: any = {};

  constructor(private route: ActivatedRoute, private planetService: PlanetService , private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.infoName =  params;
    });
    this.findList(this.infoName);
  }

  findList(item) {
    this.loading = true;
    this.planetService.addPlanets()
  .subscribe(response => {
  this.info = response;
  this.sDetail = this.info.results;
  this.detailPlanet = this.sDetail.find(p => p.name === item.name);
  this.loading = false;
  });
}

}


