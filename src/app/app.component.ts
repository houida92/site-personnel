import { Component } from '@angular/core';
export type ComponentName = "about" | "home" | "resume";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  selectedComponent: ComponentName = 'home';
  getSelectedComponent(selectedComponent: ComponentName) {
    console.log("selected component:", selectedComponent)
    this.selectedComponent = selectedComponent;
  }

}
