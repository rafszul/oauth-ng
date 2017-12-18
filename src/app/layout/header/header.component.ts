import { Component, OnInit } from '@angular/core';
import { MaterialModule} from './../../core/material.module';
import { AuthService } from './../../core/auth.service';

@Component({
  selector: 'ng-fire-header',
  templateUrl: './header.component.html',
  styleUrls: ['./../layout.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
