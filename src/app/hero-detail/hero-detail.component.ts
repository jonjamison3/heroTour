import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
