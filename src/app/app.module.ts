import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, BaseRequestOptions} from '@angular/http';
import {AppComponent} from './app.component';
import {TestEnvironmentComponent} from './test-environment/test-environment.component';
import {HeaderComponent} from './header/header.component';
import {AboutThisSiteComponent} from './about-this-site/about-this-site.component';
import {ToolsComponent} from './tools/tools.component';
import {MyPassionsComponent} from './my-passions/my-passions.component';
import {OtherProjectsComponent} from './other-projects/other-projects.component';
import {NutritionComponent} from './nutrition/nutrition.component';
import {RouterModule, Routes} from '@angular/router';
import {DropdownDirective} from './shared/dropdown.directive';
import {FitnessComponent} from './fitness/fitness.component';
import {PassionComponent} from './my-passions/passion/passion.component';
import {PassionDetailsComponent} from './my-passions/passion-details/passion-details.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {AngularComponent} from './tools/angular/angular.component';
import {BootstrapComponent} from './tools/bootstrap/bootstrap.component';
import {WebstormComponent} from './tools/webstorm/webstorm.component';
import {UdemyComponent} from './tools/udemy/udemy.component';
import {GamesComponent} from './games/games.component';
import {GuessGameComponent} from './games/guess-game/guess-game.component';
import {ReadingComponent} from './my-passions/reading/reading.component';
import { MeditationComponent } from './my-passions/meditation/meditation.component';
import { TravelingComponent } from './my-passions/traveling/traveling.component';
import { GamespassionComponent } from './my-passions/gamespassion/gamespassion.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import { PostNewsComponent } from './post-news/post-news.component';
import { MyCarouselComponent } from './my-carousel/my-carousel.component';
import { CarouselModule } from 'angular4-carousel';
import { BooksComponent } from './my-passions/reading/books/books.component';
import { ToReadBooksComponent } from './my-passions/reading/to-read-books/to-read-books.component';




export const firebaseConfig = {
  apiKey: "AIzaSyDWOVFJqkUAH3ej5LuSkacwNpIu5iCTEkU",
  authDomain: "https://mybackend-a7cfa.firebaseio.com/",
  databaseURL: "https://mybackend-a7cfa.firebaseio.com/",
  storageBucket: "",
  messagingSenderId: ""
};



const appRoutes: Routes = [
  {path: '', component: AboutThisSiteComponent},
  {path: 'about', component: AboutThisSiteComponent},
  {
    path: 'games', component: GamesComponent, children: [
    {path: 'guessgame', component: GuessGameComponent},
  ]
  },
  {path: 'nutrition', redirectTo: '/passion/nutrition'},
  {
    path: 'tools', component: ToolsComponent, children: [
    {path: 'angular', component: AngularComponent},
    {path: 'bootstrap', component: BootstrapComponent},
    {path: 'webstorm', component: WebstormComponent},
    {path: 'udemy', component: UdemyComponent}
  ]
  },
  {
    path: 'passion', component: MyPassionsComponent, children: [
    {path: 'reading', component: ReadingComponent, children: [
      {path: 'booksRead', component: BooksComponent},
      {path: 'booksToRead', component: ToReadBooksComponent}
    ]},
    {path: 'meditation', component: MeditationComponent},
    {path: 'traveling', component: TravelingComponent},
    {path: 'nutrition', component: NutritionComponent},
    {path: 'fitness', component: FitnessComponent},
    {path: 'games', component: GamespassionComponent},
  ]
  },
  {path: 'projects', component: OtherProjectsComponent},
  {path: 'test', component: TestEnvironmentComponent},
  {path: 'fitness', redirectTo: 'passion/fitness'},
  {path: 'passion/:title', component: PassionComponent},
  {path: 'loginpage', component: LoginpageComponent},
  {path: 'test-environment', component: TestEnvironmentComponent},
  {path: 'postNews', component: PostNewsComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    TestEnvironmentComponent,
    HeaderComponent,
    AboutThisSiteComponent,
    ToolsComponent,
    MyPassionsComponent,
    OtherProjectsComponent,
    NutritionComponent,
    DropdownDirective,
    FitnessComponent,
    PassionComponent,
    PassionDetailsComponent,
    LoginpageComponent,
    AngularComponent,
    BootstrapComponent,
    WebstormComponent,
    UdemyComponent,
    GamesComponent,
    GuessGameComponent,
    ReadingComponent,
    MeditationComponent,
    TravelingComponent,
    GamespassionComponent,
    PostNewsComponent,
    MyCarouselComponent,
    BooksComponent,
    ToReadBooksComponent,



  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    CarouselModule,

],
  providers: [
    AngularFireAuth,

    // providers used to create fake backend

    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
