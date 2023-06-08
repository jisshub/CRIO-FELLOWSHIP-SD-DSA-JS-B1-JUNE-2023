// const age = 18
// if (age >= 18) {
//   console.log('Eligible')
// } else {
//   console.log('Not Eligible')
// }

// nested if else statement

// "Write a program that takes a student's exam score as input and prints out their corresponding grade. The grading system is as follows:

// Scores above or equal to 90 receive an 'A' grade.
// Scores between 80 and 89 receive a 'B' grade.
// Scores between 70 and 79 receive a 'C' grade.
// Scores between 60 and 69 receive a 'D' grade.
// Scores below 60 receive an 'F' grade.
// Additionally, if a student's score is above 100 or below 0, the program should display an error message indicating an invalid score."

function calculateGrade(grade) {
  if (grade >= 90) {
    return 'A';
  } else if (grade >= 80 && grade <= 89) {
    return 'B';
  } else if (grade >= 70 && grade <= 79) {
    return 'C';
  } else if (grade >= 60 && grade <= 69) {
    return 'D';
  } else if (grade > 100 || grade < 0) {
    return 'Invalid Score';
  } else {
    return 'F';
  }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your score: ', (grade) => {
  // Call the calculateGrade function or perform any other operations with the grade input here
  const result = calculateGrade(grade)
  console.log('Grade:', result);

  rl.close();
});