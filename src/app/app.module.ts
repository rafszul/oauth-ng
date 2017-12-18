// core

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// third party

import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules

import { AppRoutingModule } from './app-routing.module';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { CoreModule } from './core/core.module';
import { MaterialModule} from './core/material.module';

// components

import { AppComponent } from './app.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { LostComponent } from './lost/lost.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';

// services:

import { AuthService } from './core/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserProfileComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LostComponent,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    CanActivateRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
