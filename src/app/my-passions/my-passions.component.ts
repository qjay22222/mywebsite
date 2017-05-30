import { Component, OnInit } from '@angular/core';
import {PassionService} from '../shared/passion.service';

@Component({
  selector: 'app-my-passions',
  templateUrl: './my-passions.component.html',
  styleUrls: ['./my-passions.component.css']
})
export class MyPassionsComponent implements OnInit {


  constructor(private passionService: PassionService) { }

  ngOnInit() {

  }


  passionText = 'Following are a list of my passions i absolutely LOVE';

}
