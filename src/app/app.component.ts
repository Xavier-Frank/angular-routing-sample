import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';

  constructor(private router:Router) {
  }
  goToFirstComponent() {
    this.router.navigate(["/first"])

  }

  goToSecondComponent() {
    this.router.navigate(["/second"])
  }
}
