import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'] 
})
export class HeroesComponent implements OnInit{
  heroes: Hero[]; 
  selectedHero: Hero;

  constructor(private router: Router,private heroService: HeroService) { }
  ngOnInit(): void{
     this.getHeroes();
    }
  getHeroes(): void {
     this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes); // eqivalent to:  .then(function(heroes1){return this.heroes = heroes1})
    }
  onSelect(hero: Hero): void{
	 this.selectedHero = hero;
    }
  gotoDetail(): void{
  	this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
