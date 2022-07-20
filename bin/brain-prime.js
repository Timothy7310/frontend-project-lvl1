#!/usr/bin/env node

import Game from '../src/index.js';

class PrimeGame extends Game {
  isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  rightAnswer(num) {
    if (this.isPrime(num)) {
      return 'yes';
    }
    return 'no';
  }

  start() {
    this.ruleMessage();

    for (let i = 0; i < this.countOfAnswers; i += 1) {
      const num = this.randomNumber(100);

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

const brainPrime = new PrimeGame(3, 'Answer "yes" if given number is prime. Otherwise answer "no".');

brainPrime.greeting();
brainPrime.start();
