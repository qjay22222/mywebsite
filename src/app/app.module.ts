import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';

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
import { PassionDetailsComponent } from './my-passions/passion-details/passion-details.component';
import { LoginComponent } from './login/login.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from 'app/_guards';
import {AlertService} from './_services/alert.service';
import {AuthenticationService} from './_services/authentication.service';
import {UserService} from './_services/user.service';
import {fakeBackendProvider} from './_helpers/fake-backend';
import {MockBackend} from '@angular/http/testing';
import {AlertComponent} from './_directives/alert.component';
import {RegisterComponent} from './register/register.component';


const appRoutes: Routes = [
  {path: '', component: AboutThisSiteComponent },
  {path: 'about', component: AboutThisSiteComponent },
  {path: 'nutrition', component: NutritionComponent },
  {path: 'angular', component: AngularComponent },
  {path: 'passion', component: MyPassionsComponent },
  {path: 'projects', component: OtherProjectsComponent },
  {path: 'test', component: TestEnvironmentComponent },
  {path: 'fitness', component: FitnessComponent },
  {path: 'passion/:title', component: PassionComponent },
  {path: 'login', component: LoginComponent },
  {path: 'test-environment', component: TestEnvironmentComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
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
    PassionDetailsComponent,
    LoginpageComponent,
    HomeComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
