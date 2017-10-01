import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { SimpleGraphComponent } from './simple-graph.component';
import { DemoComponent } from './demo.component';
import { ForceGraphComponent } from './visuals/graph/force-graph.component';
import { SHARED_VISUALS } from './visuals/shared/index'

import { HeroService } from './hero.service';
import { D3Service, D3_DIRECTIVES } from './d3util/index';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    SimpleGraphComponent,
    ForceGraphComponent,
    DemoComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES    
  ],
  providers: [
    HeroService,
    D3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
