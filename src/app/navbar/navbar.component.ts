import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ComponentName} from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() onComponentSelected = new EventEmitter<ComponentName>();

  constructor() { }

  ngOnInit() {
  }
  selectComponent(component: ComponentName) {
    this.onComponentSelected.emit(component);
  }

}
