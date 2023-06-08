// Using Switch Case

"Write a program that takes a month number (1-12) as input and prints the corresponding month name. Use a switch case statement to implement the logic."


function getMonthName(monthNumber) {
  let monthName;

  switch (monthNumber) {
    case 1:
      monthName = 'January';
      break;
    case 2:
      monthName = 'February';
      break;
    case 3:
      monthName = 'March';
      break;
    case 4:
      monthName = 'April';
      break;
    case 5:
      monthName = 'May';
      break;
    case 6:
      monthName = 'June';
      break;
    case 7:
      monthName = 'July';
      break;
    case 8:
      monthName = 'August';
      break;
    case 9:
      monthName = 'September';
      break;
    case 10:
      monthName = 'October';
      break;
    case 11:
      monthName = 'November';
      break;
    case 12:
      monthName = 'December';
      break;
    default:
      monthName = 'Invalid month number';
  }

  return monthName;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter month number: ', (monthNumber) => {
  const month = getMonthName(parseInt(monthNumber, 10));
  console.log('Month Name:', month);

  rl.close();
});
