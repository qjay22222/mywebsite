import {Component, OnInit} from '@angular/core';
import {CarouselModule} from 'angular4-carousel';
import {ICarouselConfig, AnimationConfig} from 'angular4-carousel';


@Component({
  selector: 'app-my-carousel',
  templateUrl: './my-carousel.component.html',
  styleUrls: ['./my-carousel.component.css']
})
export class MyCarouselComponent implements OnInit {


  public imageSources: string[] = [
    '/car1.jpg',

  ];

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };


  constructor() {
  }

  ngOnInit() {
  }


}
