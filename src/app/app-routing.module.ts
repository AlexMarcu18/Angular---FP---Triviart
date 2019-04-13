import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './modules/home-module/landing-page/landing-page.component';
import { ModalModule } from 'ngx-bootstrap';
import { GamePageComponent } from './modules/game-module/game-page/game-page.component';
import { AuthGuardService } from './services/authentication/auth-guard/auth-guard.service';
import { DashboardComponent } from './modules/admin-module/dashboard/dashboard.component';
import { RoleGuardService } from './services/authentication/role-guard/role-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo:'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    data: { title: 'Home'},
    component: LandingPageComponent
  },
  {
    path:'game-page',
    component:GamePageComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[RoleGuardService]
  },
  {
    path: '**',
   redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ModalModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
