import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  selectedHero?: Hero

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  // Clicking on the hero's button saves the hero in the property selectecHero
  onSelect(hero: Hero): void {
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  // We use the service to obtain the list of heroes and store them in the
  // heroes property.
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes))
  }
}
