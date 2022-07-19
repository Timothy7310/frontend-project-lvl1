#!/usr/bin/env node

import Game from '../src/index.js';

class CalcGame extends Game {
  constructor(countOfAnswers, rules) {
    super(countOfAnswers, rules);

    this.operators = ['+', '-', '*'];
  }

  randomOperator() {
    return this.operators[Math.floor(Math.random() * this.operators.length)];
  }

  rightAnswer(num1, num2, operator) {
    switch (operator) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      default: return null;
    }
  }

  start() {
    this.ruleMessage();

    for (let i = 0; i < this.countOfAnswers; i += 1) {
      const num1 = this.randomNumber();
      const num2 = this.randomNumber();
      const operator = this.randomOperator();

      this.questionMessage(num1, operator, num2);
      const answer = this.getAnswer();

      if (+answer !== this.rightAnswer(num1, num2, operator)) {
        this.wrongMessage(answer, this.rightAnswer(num1, num2, operator));
        return;
      }
      this.rightMessage();
    }

    this.finalMessage();
  }
}

const brainCalc = new CalcGame(3, 'What is the result of the expression?');

brainCalc.greeting();
brainCalc.start();
