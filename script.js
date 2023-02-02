// variabels created
let compNum;
let compChoice;
let userNum;
let userChoice;
let compPoint = 0;
let userPoint = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

window.addEventListener("load", function () {
  start();

  rockButton.addEventListener("click", () => {
    userNum = 1;
    userChooses();
  });
  paperButton.addEventListener("click", () => {
    userNum = 2;
    userChooses();
  });
  scissorsButton.addEventListener("click", () => {
    userNum = 3;
    userChooses();
  });
});

function start() {
  console.log("start");
  ranNumGen();
}

// got it from chat gpt with this promt: "give me a js function, that gives me a random number bewteen 1 and 3, but includes 1 and 3."
function ranNumGen() {
  compNum = Math.floor(Math.random() * 3) + 1;
  //   console.log(compNum);
  compChooses();
}

// translates numbers to rock, paper, or scissors.
function compChooses() {
  if (compNum == 1) {
    compChoice = "rock";
  } else if (compNum == 2) {
    compChoice = "paper";
  } else {
    compChoice = "scissors";
  }
  //   compChoice = "paper";

  console.log(compChoice);
}

function userChooses() {
  if (userNum == 1) {
    userChoice = "rock";
  } else if (userNum == 2) {
    userChoice = "paper";
  } else {
    userChoice = "scissors";
  }
  console.log(userChoice);
  compareChoices();
}

function compareChoices() {
  if ((userChoice == "rock") & (compChoice == "scissors")) {
    userPoint++;
    console.log("du har: " + userPoint + "point");
  }
  if ((userChoice == "paper") & (compChoice == "rock")) {
    userPoint++;
    console.log("du har: " + userPoint + "point");
  }
  if ((userChoice == "scissors") & (compChoice == "paper")) {
    userPoint++;
    console.log("du har: " + userPoint + "point");
  } else if (userChoice == compChoice) {
    console.log("Draw");
  } else {
    compPoint++;
    console.log("computeren har " + compPoint + " point");
  }
  ranNumGen();
}
