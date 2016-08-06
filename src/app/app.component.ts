import { Component } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './heroes';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
  
})

export class AppComponent {
  title = 'Tour of Heroes';
  public heroes = HEROES;
  selectedHero: Hero;
  hero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; };
}




