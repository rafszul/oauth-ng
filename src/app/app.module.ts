// core

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// third party

import 'hammerjs';

// modules

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MaterialModule} from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components

import { AppComponent } from './app.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,\
    MaterialModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
