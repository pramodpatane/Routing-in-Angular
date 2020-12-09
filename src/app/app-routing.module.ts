import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { SportComponent } from './sport/sport.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { OpinionComponent } from './opinion/opinion.component';
import { WorldComponent } from './world/world.component';
import { IndiaComponent } from './india/india.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'india', component: IndiaComponent },
  { path: 'world', component: WorldComponent },
  { path: 'sport', component: SportComponent },
  { path: 'opinion', component: OpinionComponent },
  { path: 'bussiness', component: BussinessComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
