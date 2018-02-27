import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
navbar = false;

  showNavBar() {
    if (this.navbar === true) {
      this.navbar = false;
    } else if (this.navbar === false) {
      this.navbar = true;
    }

    console.log('showing nav bar');
  }

}
