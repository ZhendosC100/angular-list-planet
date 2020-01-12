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

  detailPlanet: any = [];
  sDetail: PlanetList[] = [];
  infoName: any = {};
  info: any = {};

  constructor(private route: ActivatedRoute, private planetService: PlanetService , private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.infoName =  params;
    });
    this.findList(this.infoName);
  }

  findList(item) {
    this.planetService.addPlanets()
      .subscribe(response => {
        this.info = response;
        this.sDetail = this.info.results;
        console.log(this.sDetail);
        this.detailPlanet = this.sDetail.find(p => p.name === item.name);
        console.log(this.detailPlanet);
        //this.info = response;
        //this.planets = this.info.results;
      });
  }

}
