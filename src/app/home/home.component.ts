import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ComponentName} from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
