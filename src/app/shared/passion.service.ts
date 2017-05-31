
import {PassionComponent} from '../my-passions/passion/passion.component';
import {EventEmitter} from '@angular/core';
import {Passion} from '../my-passions/passion/passion.model';


export class PassionService {
  passionSelected = new EventEmitter<Passion>();

  myPassions: Passion[] = [
    new Passion('reading', 'reading description', 'myReading Description'),
    new Passion('meditation', 'meditation description', 'myMeditation Description'),
    new Passion('traveling', 'traveling description', 'myTraveling Description'),
    new Passion('fitness', 'fitness description', 'myfitness Description'),
    new Passion('nutrition', 'nutrition description', 'mynutrition Description')];


  // new PassionComponent('reading', 'reading description', 'myReading Description'),
  // new PassionComponent('meditation', 'meditation description', 'myMeditation Description'),
  // new PassionComponent('traveling', 'traveling description', 'myTraveling Description'),
  // new PassionComponent('fitness', 'fitness description', 'myfitness Description'),
  // new PassionComponent('nutrition', 'nutrition description', 'mynutrition Description'
  getPassions() {
    return this.myPassions.slice();
  }
  addPassion(passion: Passion) {
    this.myPassions.push(passion);
  }
}
