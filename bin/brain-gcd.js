#!/usr/bin/env node

import Game from '../src/index.js';

class GCDGame extends Game {
  rightAnswer(num1, num2) {
    if (num2 > num1) {
      return this.rightAnswer(num2, num1);
    }

    if (!num2) {
      return num1;
    }

    return this.rightAnswer(num2, num1 % num2);
  }

  start() {
    this.ruleMessage();

    for (let i = 0; i < this.countOfAnswers; i += 1) {
      const num1 = this.randomNumber(100);
      const num2 = this.randomNumber(100);

      this.questionMessage(num1, num2);
      const answer = this.getAnswer();

      if (+answer !== this.rightAnswer(num1, num2)) {
        this.wrongMessage(answer, this.rightAnswer(num1, num2));
        return;
      }
      this.rightMessage();
    }

    this.finalMessage();
  }
}

const brainGCD = new GCDGame(3, 'Find the greatest common divisor of given numbers.');

brainGCD.greeting();
brainGCD.start();
