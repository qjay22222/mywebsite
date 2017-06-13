import {Component, OnInit} from '@angular/core';
import {PassionService} from '../shared/passion.service';
import {Passion} from './passion/passion.model';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {BookServiceService} from '../shared/book-service.service';

@Component({
  selector: 'app-my-passions',
  templateUrl: './my-passions.component.html',
  styleUrls: ['./my-passions.component.css'],
  animations: [
    trigger('buttonFlyIn', [
      state('normal', style({
        transform: 'translateY(0)',
        'opacity': 1
      })),
      state('init', style({
        transform: 'translateY(-700%)',
        'opacity': 0
      })),
      transition('init => normal', animate(300, keyframes([
        style({opacity: 0, transform: 'translateY(-700%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(15px)', offset: 0.2}),
        style({opacity: 1, transform: 'translateY(0)', offset: 0.5})
      ])))
    ]),

    trigger('buttonFlyIn2', [
      state('normal', style({
        transform: 'translateY(0)',
        'opacity': 1
      })),
      state('init', style({
        transform: 'translateY(-700%)',
        'opacity': 0
      })),
      transition('init => normal', animate(300, keyframes([
        style({opacity: 0, transform: 'translateY(-700%)', offset: 0.5}),
        style({opacity: 1, transform: 'translateY(15px)', offset: 0.7}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1.0})
      ])))
    ])
    ,

    trigger('buttonFlyIn3', [
      state('normal', style({
        transform: 'translateY(0)',
        'opacity': 1
      })),
      state('init', style({
        transform: 'translateY(-700%)',
        'opacity': 0
      })),
      transition('init => normal', animate(300, keyframes([
        style({opacity: 0, transform: 'translateY(-700%)', offset: 1}),
        style({opacity: 1, transform: 'translateY(15px)', offset: 1.2}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1.5})
      ])))
    ])
    ,

    trigger('buttonFlyIn4', [
      state('normal', style({
        transform: 'translateY(0)',
        'opacity': 1
      })),
      state('init', style({
        transform: 'translateY(-700%)',
        'opacity': 0
      })),
      transition('init => normal', animate(300, keyframes([
        style({opacity: 0, transform: 'translateY(-700%)', offset: 1.5}),
        style({opacity: 1, transform: 'translateY(15px)', offset: 1.7}),
        style({opacity: 1, transform: 'translateY(0)', offset: 2.0})
      ])))
    ])
    ,

    trigger('buttonFlyIn5', [
      state('normal', style({
        transform: 'translateY(0)',
        'opacity': 1
      })),
      state('init', style({
        transform: 'translateY(-700%)',
        'opacity': 0
      })),
      transition('init => normal', animate(300, keyframes([
        style({opacity: 0, transform: 'translateY(-700%)', offset: 2}),
        style({opacity: 1, transform: 'translateY(15px)', offset: 2.2}),
        style({opacity: 1, transform: 'translateY(0)', offset: 2.5})
      ])))
    ]),

    trigger('buttonFlyIn6', [
      state('normal', style({
        transform: 'translateY(0)',
        'opacity': 1
      })),
      state('init', style({
        transform: 'translateY(-700%)',
        'opacity': 0
      })),
      transition('init => normal', animate(300, keyframes([
        style({opacity: 0, transform: 'translateY(-700%)', offset: 2.5}),
        style({opacity: 1, transform: 'translateY(15px)', offset: 2.7}),
        style({opacity: 1, transform: 'translateY(0)', offset: 3.0})
      ])))
    ])

  ]
})


export class MyPassionsComponent implements OnInit {

  state = 'init';

  selectedPassion: Passion;

  constructor(private passionService: PassionService, private bs: BookServiceService) {
    this.state = 'init';
  }

  ngOnInit() {
    this.passionService.passionSelected.subscribe(
      (passion: Passion) => {
        this.selectedPassion = passion;
      }
    );

    setTimeout(() => {
      this.state = 'normal';
    }, 100);
  }

  getPassions() {
    return this.passionService.getPassions();
  }

  passionText = 'a short list of my Hobbies (-:';

}
