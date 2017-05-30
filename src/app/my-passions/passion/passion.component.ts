import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-passion',
  templateUrl: './passion.component.html',
  styleUrls: ['./passion.component.css']
})
export class PassionComponent implements OnInit {

  private title: string;
  private description: string;
  private myDescription: string;
  constructor(private route: ActivatedRoute) {
  }

  setTitle(title: string) {
    this.title = title;
  }
  getTitle() {
    return this.title;
  }

  setDescription(description: string) {
    this.description = description;
  }
  getDescription() {
    return this.description;
  }

  setMyDescription(myDescription: string) {

  }
  getMyDescriptoin() {
    return this.myDescription;
  }

  ngOnInit() {
  }



}
