import { Component, OnInit } from '@angular/core';
import {PassionService} from '../shared/passion.service';
import {Passion} from './passion/passion.model';

@Component({
  selector: 'app-my-passions',
  templateUrl: './my-passions.component.html',
  styleUrls: ['./my-passions.component.css']
})
export class MyPassionsComponent implements OnInit {


  selectedPassion: Passion;
  constructor(private passionService: PassionService) { }

  ngOnInit() {
    this.passionService.passionSelected.subscribe(
      (passion: Passion) => {
        this.selectedPassion = passion;
      }
      );
  }

getPassions() {
    return this.passionService.getPassions();
}

  passionText = 'Following are a list of my passions i absolutely LOVE';

}
