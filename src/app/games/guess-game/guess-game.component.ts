import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-game',
  templateUrl: './guess-game.component.html',
  styleUrls: ['./guess-game.component.css']
})
export class GuessGameComponent implements OnInit {
  gameStarted: boolean = false;
  constructor() { }
  runningNumber = 100;
  computerTurnMessage = 'Computer did something';
  yourTurnMessage = 'You did something';
  computerOperand = '-';
  yourOperand= '-';

  ngOnInit() {
  }



  startGame() {
    this.gameStarted = true;
  }

  resetGame() {
    this.gameStarted = false;
  }

  submitInput() {

  }

}
