import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PassionService} from '../../shared/passion.service';
import {Passion} from 'app/my-passions/passion/passion.model';

@Component({
  selector: 'app-passion',
  templateUrl: './passion.component.html',
  styleUrls: ['./passion.component.css']
})
export class PassionComponent implements OnInit {

  // private title: string;
  // private description: string;
  // private myDescription: string;
  @Input() passion: Passion;

  constructor(private passionService: PassionService) {
  }


  passionSelectedEmit() {
    this.passionService.passionSelected.emit(this.passion);
  }


  ngOnInit() {
  }



}
