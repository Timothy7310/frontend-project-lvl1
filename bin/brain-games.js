#!/usr/bin/env node

import askName from '../src/cli.js';
import brainEvenGame from './brain-even.js';

console.log('Welcome to the Brain Games!');

const userName = askName();
console.log(`Hello, ${userName}`);

brainEvenGame(userName);
