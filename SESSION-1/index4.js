function getInput(sum) {
  const input = parseInt(readlineInput.question('Enter a number (enter 0 to exit):'));

  if (input > 0) {
    console.log('Current input:', input);
    return getInput(sum + input);
  } else if (input < 0) {
    console.log('Invalid input. Negative numbers are not allowed.');
    return getInput(sum);
  } else {
    return sum;
  }
}

const readlineInput = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const result = getInput(0);
console.log('Total Sum:', result);

readlineInput.close();
