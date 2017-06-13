import {Component, OnInit} from '@angular/core';
import {NewsService} from '../shared/news.service';
import {News} from '../shared/news.model';
import {stringDistance} from 'codelyzer/util/utils';

@Component({
  selector: 'app-post-news',
  templateUrl: './post-news.component.html',
  styleUrls: ['./post-news.component.css']
})
export class PostNewsComponent implements OnInit {

  title;
  text;
  autor;
  date;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
  }


  submit() {
    this.newsService.getNewsList().push(new News(this.date, this.title, this.text, this.autor));
    this.newsService.addNewsToServers(
      this.newsService.getNewsList()
    )
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
