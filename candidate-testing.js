const input = require('readline-sync');


// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [ "Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", 
"(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
"What is the minimum crew size for the ISS? "];
let correctAnswers = [ "Sally Ride", "true", "40", "Trajectory", "3" ];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  const inputname = require('readline-sync');
    candidateName = inputname.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  const questionsAsked = require('readline-sync');
  
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(questionsAsked.question(questions[i]));
  }
  return candidateAnswers;
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;
  let totalscore = 5;

  for (let i = 0; i < candidateAnswers.length; i++) {
  
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
     console.log(`Candidate scored the correct answer on question ${i + 1}`);
     grade ++;
    } else {
     console.log (`Candidate scored wrong answer on question ${i + 1}`);
    }
 }
  //TODO 3.2 use this variable to calculate the candidates score.
  grade = (grade / totalscore) * 100;
  let passingScore = "You must score 80% or better to pass!";

  if (grade >= 80) {
    console.log(passingScore + `\n Congratulations, you scored ${grade}%!`);
  } else {
    console.log(passingScore + `\n Sorry, you scolred ${grade}%!`);
  }
  
  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, %s", candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};