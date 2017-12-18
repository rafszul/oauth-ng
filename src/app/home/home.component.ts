import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ng-fire-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageTitle = 'Home';

  constructor(public title: Title) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }

}
