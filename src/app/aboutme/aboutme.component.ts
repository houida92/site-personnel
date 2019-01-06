import { Component, OnInit } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
  animations: [
    trigger('translate1', [

    transition('void => *',
  animate(500,
    keyframes([
      style({transform: 'translateY(30%)' , opacity: 0, offset: 0}),
      style({transform: 'translateY(10%)' , offset: 0.5}),
      style({transform: 'translateY(0)' , opacity: 1, offset: 1})
    ])))
])
  ],
})
export class AboutmeComponent implements OnInit {
 isBioDisplayed = true;
  constructor() { }
  ngOnInit() {
  }
  displayBio() {
    this.isBioDisplayed = !this.isBioDisplayed;
  }
}
