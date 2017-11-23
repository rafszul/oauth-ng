import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LostComponent } from './lost/lost.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '**', component: LostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
