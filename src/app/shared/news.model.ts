export class News {
  constructor(private date: string, private title: string, private text: string, private autor: string) {}

  getDate() {
    return this.date;
  }
  getTitle() {
    return this.title;
  }

  getText() {
    return this.text;
  }

  getAutor() {
    return this.autor;
  }
}
