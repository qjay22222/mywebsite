import { Component, OnInit } from '@angular/core';
import {NewsService} from '../shared/news.service';

@Component({
  selector: 'app-about-this-site',
  templateUrl: './about-this-site.component.html',
  styleUrls: ['./about-this-site.component.css']
})
export class AboutThisSiteComponent implements OnInit {

  greetings = 'Qjays little first Web Project';
  contentText = 'this is a Site made by me using Angular 4 and the Twitter framework Bootstrap....' +
    'i will keep this continously updated and will implement new features over Time as i get more ' +
    'used to Angular etc... ' +
    'first i wanna work on the Frontend part, as i am finishing that, i will set up a backend with newsupdates' +
    ' and other features to be implemented once the backend is ready' +
  ' until then enjoy my little updates';


  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

}
