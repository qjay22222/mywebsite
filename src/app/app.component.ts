import { Component } from '@angular/core';
import {PassionService} from './shared/passion.service';
import {NewsService} from './shared/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PassionService, NewsService],
})
export class AppComponent {
  title = 'app works!';
}
