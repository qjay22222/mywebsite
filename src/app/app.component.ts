import { Component } from '@angular/core';
import {PassionService} from './shared/passion.service';
import {NewsService} from './shared/news.service';
import {LoginServiceService} from './shared/login-service.service';
import {BookServiceService} from './shared/book-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PassionService, NewsService, LoginServiceService, BookServiceService],

})
export class AppComponent {
  title = 'app works!';
}
