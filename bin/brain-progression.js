#!/usr/bin/env node

import Game from '../src/index.js';

class ProgressionGame extends Game {
  constructor(countOfAnswers, rules, lengthOfProgression) {
    super(countOfAnswers, rules);

    this.lengthOfProgression = lengthOfProgression;
    this.mathProgression = [];
    this.hideIndex = null;
  }

  randomProgression() {
    let startNumber = this.randomNumber(100);
    const interval = this.randomNumber(5);
    this.mathProgression = [];

    for (let i = 0; i < this.lengthOfProgression; i += 1) {
      this.mathProgression.push(startNumber);
      startNumber += interval;
    }

    return this.mathProgression;
  }

  hiddenRandomElement() {
    this.hideIndex = this.randomNumber(this.lengthOfProgression - 1);

    const copyMathProgression = [...this.mathProgression];
    copyMathProgression[this.hideIndex] = '..';
    return copyMathProgression;
  }

  rightAnswer() {
    return this.mathProgression[this.hideIndex];
  }

  start() {
    this.ruleMessage();

    for (let i = 0; i < this.countOfAnswers; i += 1) {
      this.randomProgression();

      this.questionMessage(this.hiddenRandomElement().join(' '));
      const answer = this.getAnswer();

      if (+answer !== this.rightAnswer()) {
        this.wrongMessage(answer, this.rightAnswer());
        return;
      }
      this.rightMessage();
    }

    this.finalMessage();
  }
}

const brainProgression = new ProgressionGame(3, 'What number is missing in the progression?', 10);

brainProgression.greeting();
brainProgression.start();
