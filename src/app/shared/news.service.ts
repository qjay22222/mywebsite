import {News} from './news.model';
import {Injectable, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class NewsService implements OnInit {


  private newsList: News[] = [];


  constructor(private http: Http) {

    console.log('Newsservice initializiert');
    this.getNewsFromServer().subscribe(
      (newsList: any[]) => {
        // newsList.reverse();
        console.log(newsList);
        this.newsList = newsList;

      },
      (error) => console.log(error)
    );



  }

  ngOnInit() {

  }


  addNews(news: News) {
    this.newsList.push(news);
  }

  getNewsList() {
    return this.newsList;
  }

  getNewsFromServer() {
    return this.http.get('https://mybackend-a7cfa.firebaseio.com/data.json')
      .map(
        function(res){
          const data = res.json();
          console.log('loggen erstmal das oberste json file: ');
          console.log(data);
          console.log(typeof data);

          const returnList = new Array<News>();
          for (const aObject of data){
            returnList.push(new News(aObject.date, aObject.title, aObject.text, aObject.autor));
          }
          return returnList;
        }
      );
  }


  addNewsToServers(news: News[]) {
    // TODO Server im moment auf write für ALLE, TODO, user admin AUthentication, sodass man nur psoten darf wenn man eingeloggt als admin
    return this.http.put('https://mybackend-a7cfa.firebaseio.com/data.json', news);
  }

}
