import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ComponentName} from '../app.component';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('appear', [

      transition('void => *',
        animate(1000,
          keyframes([
            style({opacity: 0, offset: 0}),
            style({opacity: 0.5 , offset: 0.5}),
            style({ opacity: 1, offset: 1})
          ])))
    ])
  ],
})
export class HomeComponent implements OnInit {
  @Output() onComponentSelected = new EventEmitter<ComponentName>();
  constructor() { }

  ngOnInit() {
  }
  selectComponent(component: ComponentName) {
    this.onComponentSelected.emit(component);
  }

}
