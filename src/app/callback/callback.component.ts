import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'ng-fire-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  // API_URL: string = 'http://<your-application-domain>/api';
  pageTitle = 'Home / Events  a.k.a. /callback';
  API_URL: string = 'https://slozgrpoei.execute-api.eu-west-1.amazonaws.com/int_v3_smartxpo_com/event/';
  event: string;

  constructor(public authHttp: AuthHttp, public title: Title) {}

  public securedcallback(): void {
    this.event = '';
    this.authHttp.get(`${this.API_URL}/event`)
      .map(res => res.json())
      .subscribe(
        data => this.event = data.event,
        error => this.event = error,
        () => console.log('Request Complete')
      );
  }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }

}
