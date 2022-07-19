#!/usr/bin/env node

import Game from '../src/index.js';

class EvenGame extends Game {
  isEven(num) {
    return num % 2 === 0;
  }

  rightAnswer(num) {
    if (this.isEven(num)) {
      return 'yes';
    }
    return 'no';
  }

  start() {
    this.ruleMessage();

    for (let i = 0; i < this.countOfAnswers; i += 1) {
      const num = this.randomNumber();

      this.questionMessage(num);
      const answer = this.getAnswer();

      if (answer.toLowerCase() !== this.rightAnswer(num)) {
        this.wrongMessage(answer, this.rightAnswer(num));
        return;
      }
      this.rightMessage();
    }

    this.finalMessage();
  }
}

const brainEven = new EvenGame(3, 'Answer "yes" if the number is even, otherwise answer "no".');

brainEven.greeting();
brainEven.start();
