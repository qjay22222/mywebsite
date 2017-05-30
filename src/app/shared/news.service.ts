import {News} from './news.model';

export class NewsService {

  private newsList: News[] = [new News('29.05.2017', 'erste news', 'jow, heut wurde die seite erstmal erstellt, bin noch ein angular newb, aber es macht auf jedenfall mega spaß die seite von scratch aufzubauen', 'qjay'),
    new News('29.05.2017', 'zweite news', 'jow, hab schon ziemlich viele geile ideen für die webseite', 'qjay'),
    new News('29.05.2017', 'dritte news', 'jow, soviel zu tun und so wenig zeit FML', 'qjay'),
    new News('29.05.2017', 'vierte news', 'jow, ich liebe euch', 'qjay'),
    new News('29.05.2017', 'fünfte news', 'jow, was geht ab ', 'qjay') ];
  constructor() {}

  addNews(news: News) {
    this.newsList.push(news);
  }

  getNewsList() {
    return this.newsList.slice().reverse();
  }
}
