import readlineSync from 'readline-sync';

const isEven = (num) => {
  return num % 2 === 0;
};

const countOfAnswers = 3;

const randomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const rightAnswer = (num) => {
  if (isEven(num)) {
    return 'yes';
  }
  return 'no';
};

let answer;
let num;

const brainEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 1; i <= countOfAnswers; i += 1) {
    num = randomNumber();

    console.log(`Question: ${num}`);
    answer = readlineSync.question('Your answer: ');

    if (answer.toLowerCase() !== rightAnswer(num)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer(num)}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainEvenGame;
