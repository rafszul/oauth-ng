import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';

import { MaterialModule} from './../../core/material.module';
import { AuthService } from './../../core/auth.service';

@Component({
  selector: 'ng-fire-header',
  templateUrl: './header.component.html',
  styleUrls: ['./../layout.scss']
})
export class HeaderComponent implements OnInit {

  // ref:
  @Output() navToggled = new EventEmitter();
  navOpen = false;
  //



  constructor(public router: Router, public auth: AuthService) { }

  ngOnInit() {
    // If nav is open after routing, close it

    // When the component initializes, we'll use the router events observable to check if navOpen is true on NavigationStart.
    // If this is the case, we want to close the panel so it's not still open when we arrive at a new route.

    this.router.events
      .filter(event => event instanceof NavigationStart && this.navOpen)
      .subscribe(event => this.toggleNav());
  }

  toggleNav() {
    // The navOpen property defaults to false
    // (the off-canvas navigation panel is closed on load).
    this.navOpen = !this.navOpen;
    this.navToggled.emit(this.navOpen);
  }

}
