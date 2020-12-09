import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { IndiaComponent } from './india/india.component';
import { WorldComponent } from './world/world.component';
import { SportComponent } from './sport/sport.component';
import { OpinionComponent } from './opinion/opinion.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    IndiaComponent,
    WorldComponent,
    SportComponent,
    OpinionComponent,
    BussinessComponent,
    LifestyleComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
