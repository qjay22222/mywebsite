import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../shared/login-service.service';

@Component({
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {
  }


  registerControl = false;

  rUsername = "";
  rPassword = "";
  lUsername ="";
  lPassword= "";


  logout() {
    this.loginService.logout();
  }

  login() {
    this.loginService.login(this.lUsername, this.lPassword);
  }

  register() {
    console.log(this.rUsername, this.rPassword);
    this.loginService.createUser(this.rUsername, this.rPassword);
  }

}
