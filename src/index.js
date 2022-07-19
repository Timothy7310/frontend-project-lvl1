import readlineSync from 'readline-sync';
import askName from './cli.js';

class Game {
  constructor(countOfAnswers, rules) {
    this.countOfAnswers = countOfAnswers;
    this.rules = rules;
    this.name = '';
  }

  greeting() {
    console.log('Welcome to the Brain Games!');
    this.name = askName();
    console.log(`Hello, ${this.name}`);
  }

  randomNumber() {
    return Math.floor(Math.random() * 100);
  }

  getAnswer() {
    return readlineSync.question('Your answer: ');
  }

  ruleMessage() {
    console.log(this.rules);
  }

  questionMessage(...args) {
    console.log(`Question: ${args.join(' ')}`);
  }

  finalMessage() {
    console.log(`Congratulations, ${this.name}!`);
  }

  rightMessage() {
    console.log('Correct!');
  }

  wrongMessage(answer, rightAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    console.log(`Let's try again, ${this.name}!`);
  }
}
export default Game;
