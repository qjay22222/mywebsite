import {News} from './news.model';

export class NewsService {

  private newsList: News[] = [new News('29.05.2017', 'erste news', 'jow, heut wurde die seite erstmal erstellt, bin noch ein angular newb, aber es macht auf jedenfall mega spaß die seite von scratch aufzubauen', 'qjay'),
    new News('29.05.2017', 'zweite news', 'jow, im News model wird das Datum vorerst mal als string gespeichert, später sollte das natürlich wirklich ein datum sein', 'qjay'),
    new News('29.05.2017', 'dritte news', 'jow, todo: login funktion für users und admin, admin wenn eingeloggt sollte in der lage sein news zu posten, die im backend dann persistiert werden ', 'qjay'),
    new News('29.05.2017', 'vierte news', 'jow, news items sollten dann vom backend geladen werden, die der admin davor gepostet hat', 'qjay'),
    new News('29.05.2017', 'fünfte news', 'die gleiche funktionalität natürlich auch für die anderen services', 'qjay'),
    new News('30.05.2017', 'sechste news', 'das carousel muss mal für angular 4 angepasst werden', 'qjay'),
    new News('30.05.2017', 'siebte news', 'Die background fotos sind pro forma drin, sind aus dem web geklaut, sollte auch geändert werden', 'qjay')];
  constructor() {}

  addNews(news: News) {
    this.newsList.push(news);
  }

  getNewsList() {
    return this.newsList.slice().reverse();
  }
}
