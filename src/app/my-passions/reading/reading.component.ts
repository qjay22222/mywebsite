import {Component, OnInit} from '@angular/core';
import {trigger, animate, keyframes, state, style, transition, group} from '@angular/animations';
import {BookServiceService} from '../../shared/book-service.service';


@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css'],
  animations: [
    trigger('buttonFlyIn', [
      state('normal', style({
        transform: 'translateX(0)',
        'opacity': 1
      })),
      state('init', style({
        transform: 'translateX(1000px)',
        'opacity': 0
      })),
      transition('init => normal', animate(300, keyframes([
        style({opacity: 1, transform: 'translateX(1000px)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px)', offset: 0.4}),
        style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
      ]))),
      transition('* => void', [
        group([
          animate('0.5s ease', style({
            transform: 'translateX(100px)',
            width: 10
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ]),


    trigger('buttonFlyIn2', [
      state('normal', style({
        transform: 'translateX(0)',
        'opacity': 1
      })),
      state('init', style({
        transform: 'translateX(1000px)',
        'opacity': 0
      })),
      transition('init => normal', animate(300, keyframes([
        style({opacity: 1, transform: 'translateX(1000px)', offset: 0.5}),
        style({opacity: 1, transform: 'translateX(15px)', offset: 0.9}),
        style({opacity: 1, transform: 'translateX(0)', offset: 1.5})
      ]))),
      transition('* => void', [
        group([
          animate('0.5s ease', style({
            transform: 'translateX(100px)',
            width: 10
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])

  ]
})


export class ReadingComponent implements OnInit {


  state = 'init';

  constructor(private bs: BookServiceService) {
    this.state = 'init';
  }

  ngOnInit() {
    setTimeout(() => {
      this.state = 'normal';
    }, 100);
  }

}
