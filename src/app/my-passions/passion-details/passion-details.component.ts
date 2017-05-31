import {Component, Input, OnInit} from '@angular/core';
import {PassionService} from '../../shared/passion.service';
import {Passion} from '../passion/passion.model';

@Component({
  selector: 'app-passion-details',
  templateUrl: './passion-details.component.html',
  styleUrls: ['./passion-details.component.css']
})
export class PassionDetailsComponent implements OnInit {

  @Input() passion: Passion;

  constructor(private passionService: PassionService) {
  }

  ngOnInit() {
  }

}
