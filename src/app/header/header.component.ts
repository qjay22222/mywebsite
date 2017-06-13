import { Component, OnInit } from '@angular/core';
import {PassionService} from '../shared/passion.service';
import {LoginServiceService} from '../shared/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private passionService: PassionService, private loginService: LoginServiceService) { }

  getPassions() {
    return this.passionService.getPassions();
  }

  ngOnInit() {
  }

}
