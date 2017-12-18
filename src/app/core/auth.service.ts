import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { tokenNotExpired } from 'angular2-jwt';
import Auth0Lock from 'auth0-lock';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {


  auth0Options = {
    theme: {
      logo: 'assets/SmartXpo_Iogo.png',
      primaryColor: '#A2A6CD'
    },
    languageDictionary: {
      emailInputPlaceholder: 'something@smartxpo.com',
      title: ''
    },

// we specify what kind of data we want back using the `scopes`` key.

    auth: {
      redirectUrl: environment.auth0.callbackURL,
      responseType: 'token id_token',
      audience: `https://${environment.auth0.domain}/userinfo`,

// here, on top of the default openid, we’re also interested in getting back the profile information.

      params: {
        scope: 'openid profile'
      }
    },
    // autoParseHash: true,
    autoclose: true,
    oidcConformant: true,
  };


  lock = new Auth0Lock(
    environment.auth0.clientId,
    environment.auth0.domain,
    this.auth0Options
  );

  profile: any;

  // in the service’s constructor, we listen for either the authenticated or the authorization_error events on the lock instance

  constructor(public http: HttpClient, public router: Router) {
    this.lock.on('authenticated', (authResult: any) => {
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          throw new Error(error);
        }
        console.log(profile);
        this.profile = profile;
        window.location.hash = '';
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        this.router.navigate(['/callback']);
      });

      console.log('It works, and your access token is:', authResult.accessToken);
      // console.log('It works, and your id token is:', authResult.idToken);
      console.log('and your token will expire in:', authResult.expiresIn, 'seconds');
      console.log(authResult);

    });

    this.lock.on('authorization_error', error => {
      console.log('something went wrong', error);
    });
  }

  login() {
    this.lock.show();
  }

  // handleAuthentication() {
  //   this.lock.parseHash((err, authResult) => {
  //     console.log(authResult);
  //   });
  // }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  isAuthenticated() {
    return tokenNotExpired();
  }


  fetchProfile(): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token required for fetching profile');
    }
    this.lock.getUserInfo(accessToken, (error, profile) => {
      if (error) {
        throw new Error(error);
      }
      this.profile = profile;
  });
  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   // Check whether the token is expired and return
  //   // true or false
  //   return !this.jwtHelper.isTokenExpired(token);
  // }
}
}
