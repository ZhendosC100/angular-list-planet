import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {

  @Output() onSearch: EventEmitter <string> = new EventEmitter<string>()

  namePlanet: string =''
  constructor() {
    
   }
  
  ngOnInit() {
  }

  onInputText(){
    if(this.namePlanet.trim()){
      const namePlanet: string = this.namePlanet
      this.onSearch.emit(namePlanet)
    }
  }

}
