// while loop

"Write a program that prompts the user to enter a series of numbers. The program should keep accepting numbers until the user enters a negative number. Once the user enters a negative number, the program should stop accepting input and display the sum of all the positive numbers enter"


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculatePositiveNumberSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      sum += numbers[i];
    }
  }

  return sum;
}

rl.question('Enter series of numbers: ', (input) => {
  const numbers = input.split(' ').map(Number);
  const sum = calculatePositiveNumberSum(numbers);
  console.log('Sum of positive numbers:', sum);

  rl.close();
});
