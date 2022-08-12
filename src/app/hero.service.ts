import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

// This is an example of a typical service-in-service
import { MessageService } from './message.service'

import { Hero } from './hero'
import { HEROES } from './mock-heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  // Returns a observable(asynchronus httpclient)
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    // This is an example of a typical service-in-service
    this.messageService.add('HeroService: fetched heroes')
    return heroes
  }

  // Returns one hero for id
  getHero(id: number): Observable<Hero | undefined> {
    const hero = HEROES.find(h => h.id === id)
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero)
  }
}
