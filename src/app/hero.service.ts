import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Observable } from "rxjs/Rx";

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    return Observable.of(HEROES)
  }

  getHero(id: number): Observable<Hero> {
    console.log("getHero", "id", id)
    return Observable.of(HEROES[id - 11])
  }
}
