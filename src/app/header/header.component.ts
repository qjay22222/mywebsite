import { Component, OnInit } from '@angular/core';
import {PassionService} from '../shared/passion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private passionService: PassionService) { }

  getPassions() {
    return this.passionService.getPassions();
  }

  ngOnInit() {
  }

}
