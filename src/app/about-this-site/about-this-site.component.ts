import { Component, OnInit } from '@angular/core';
import {NewsService} from '../shared/news.service';
import {LoginServiceService} from '../shared/login-service.service';

@Component({
  selector: 'app-about-this-site',
  templateUrl: './about-this-site.component.html',
  styleUrls: ['./about-this-site.component.css']
})
export class AboutThisSiteComponent implements OnInit {

  greetings = 'Qjays little test Project';
  contentText = 'Hi, i just got started learning angular and this is what i built so far. over time i ll try to implement new features. ';


  constructor(private newsService: NewsService, private loginService: LoginServiceService) { }

  getNewsService() {
    return this.newsService;
  }

  ngOnInit() {
  }

}
