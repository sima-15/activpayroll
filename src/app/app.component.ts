import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isExpanded = true;
  title = 'activpayroll';

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
