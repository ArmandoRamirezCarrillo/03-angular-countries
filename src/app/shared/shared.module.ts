import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent
  ]
})
export class SharedModule { }
