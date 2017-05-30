
import {PassionComponent} from '../my-passions/passion/passion.component';


export class PassionService {

  myPassions: PassionComponent[] = [];


  // new PassionComponent('reading', 'reading description', 'myReading Description'),
  // new PassionComponent('meditation', 'meditation description', 'myMeditation Description'),
  // new PassionComponent('traveling', 'traveling description', 'myTraveling Description'),
  // new PassionComponent('fitness', 'fitness description', 'myfitness Description'),
  // new PassionComponent('nutrition', 'nutrition description', 'mynutrition Description'
  getPassions() {
    return this.myPassions.slice();
  }
  addPassion(passion: PassionComponent) {
    this.myPassions.push(passion);
  }
}
