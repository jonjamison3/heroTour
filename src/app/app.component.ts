import { Component } from '@angular/core';
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
  
}




