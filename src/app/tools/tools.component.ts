import {Component, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-angular',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
  animations: [
    trigger('buttonFlyIn', [
      state('normal', style({
        transform: 'translateX(0)',
        'opacity': 1
      })),
      state('init', style({
        transform: 'translateX(700%)',
        'opacity': 0
      })),
      transition('init => normal', animate(300, keyframes([
        style({opacity: 0, transform: 'translateX(700%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px)', offset: 0.2}),
        style({opacity: 1, transform: 'translateX(0)', offset: 0.5})
      ])))
    ]),

    trigger('buttonFlyIn2', [
      state('normal', style({
        transform: 'translateX(0)',
        'opacity': 1
      })),
      state('init', style({
        transform: 'translateX(700%)',
        'opacity': 0
      })),
      transition('init => normal', animate(300, keyframes([
        style({opacity: 0, transform: 'translateX(700%)', offset: 0.5}),
        style({opacity: 1, transform: 'translateX(15px)', offset: 0.7}),
        style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
      ])))
    ])
    ,

    trigger('buttonFlyIn3', [
      state('normal', style({
        transform: 'translateX(0)',
        'opacity': 1
      })),
      state('init', style({
        transform: 'translateX(700%)',
        'opacity': 0
      })),
      transition('init => normal', animate(300, keyframes([
        style({opacity: 0, transform: 'translateX(700%)', offset: 1}),
        style({opacity: 1, transform: 'translateX(15px)', offset: 1.2}),
        style({opacity: 1, transform: 'translateX(0)', offset: 1.5})
      ])))
    ])
    ,

    trigger('buttonFlyIn4', [
      state('normal', style({
        transform: 'translateX(0)',
        'opacity': 1
      })),
      state('init', style({
        transform: 'translateX(700%)',
        'opacity': 0
      })),
      transition('init => normal', animate(300, keyframes([
        style({opacity: 0, transform: 'translateX(700%)', offset: 1.5}),
        style({opacity: 1, transform: 'translateX(15px)', offset: 1.7}),
        style({opacity: 1, transform: 'translateX(0)', offset: 2})
      ])))
    ])

  ]
})


export class ToolsComponent implements OnInit {

  state = 'init';

  headerText = 'Some useful tools/sites that i used';
  contentText = '';

  constructor() {
    this.state = 'init';
  }


  ngOnInit() {
    setTimeout(() => {
      this.state = 'normal';
    }, 100);

  }

}
