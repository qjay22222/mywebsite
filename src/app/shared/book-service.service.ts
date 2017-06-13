import {Injectable} from '@angular/core';

@Injectable()
export class BookServiceService {

  enableReadBooks = true;
  enableToReadBooks = true;

  constructor() {
  }

  toEnableReadBooks() {
    this.enableReadBooks = true;
    this.enableToReadBooks = false;
  }

  toEnableToReadBooks() {
    this.enableReadBooks = false;
    this.enableToReadBooks = true;
  }

  reset() {
    this.enableReadBooks = true;
    this.enableToReadBooks = true;
  }

}
