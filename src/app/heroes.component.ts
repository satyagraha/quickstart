import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  title = 'Tour of Heroes'
  // hero: Hero = null
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }
  heroes: Hero[]
  selectedHero: Hero

  constructor(private router: Router, private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(
      heroes => {
        this.heroes = heroes
      })
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
