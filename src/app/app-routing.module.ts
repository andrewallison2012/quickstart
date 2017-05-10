import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
  path: 'detail/:id',
  component: HeroDetailComponent
},
{
  path: '',
  redirectTo: '/heroes',
  pathMatch: 'full'
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'heroes',
  component: HeroesComponent
}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]

})
export class AppRoutingModule { }
