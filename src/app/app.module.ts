import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestEnvironmentComponent } from './test-environment/test-environment.component';
import { HeaderComponent } from './header/header.component';
import { AboutThisSiteComponent } from './about-this-site/about-this-site.component';
import { AngularComponent } from './angular/angular.component';
import { MyPassionsComponent } from './my-passions/my-passions.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import {NutritionComponent} from './nutrition/nutrition.component';
import {RouterModule, Routes} from '@angular/router';
import {DropdownDirective} from './shared/dropdown.directive';
import { CarouselComponent } from './carousel/carousel.component';
import { FitnessComponent } from './fitness/fitness.component';
import { PassionComponent } from './my-passions/passion/passion.component';


const appRoutes: Routes = [
  {path: '', component: AboutThisSiteComponent },
  {path: 'about', component: AboutThisSiteComponent },
  {path: 'nutrition', component: NutritionComponent },
  {path: 'angular', component: AngularComponent },
  {path: 'passion', component: MyPassionsComponent },
  {path: 'projects', component: OtherProjectsComponent },
  {path: 'test', component: TestEnvironmentComponent },
  {path: 'fitness', component: FitnessComponent },
  {path: 'passion/:title', component: PassionComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    TestEnvironmentComponent,
    HeaderComponent,
    AboutThisSiteComponent,
    AngularComponent,
    MyPassionsComponent,
    OtherProjectsComponent,
    NutritionComponent,
    DropdownDirective,
    CarouselComponent,
    FitnessComponent,
    PassionComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
