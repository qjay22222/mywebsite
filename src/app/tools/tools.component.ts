import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  headerText = 'Angular Rocks';
  contentText = 'Ursprünglich vom Angular Team als AngularJs (Angular 1) entwickelt befindet sich die aktuelle Version schon bei 4 ' +
    '(wobei 3 geskippt wurde um mit der Versionszahl des Routings mitzuhalten). Angular 4 wird von google entwickelt und ist eine relativ neue ' +
    'Technologie. Sie basiert auf das MVC (Model View Control)- Design.. wer mehr wissen will => google';
  constructor() { }

  ngOnInit() {
  }

}
