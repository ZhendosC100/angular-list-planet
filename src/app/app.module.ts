import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { PlanetsComponent } from './planets/planets.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    FilterBarComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
