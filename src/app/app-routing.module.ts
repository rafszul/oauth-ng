import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LostComponent } from './lost/lost.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';

import { CanActivateRouteGuard } from './can-activate-route.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'profile', component: UserProfileComponent,
  canActivate: [CanActivateRouteGuard]
 },
  { path: '**', component: LostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
