let userScore = 0;
let compScore = 0;
let choice = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
      const options = ["rock", "paper", "scissor"];
      const randIdx = Math.floor(Math.random() * 3);
      return options[randIdx];
}

const drawGame = () => {
      msg.innerText = "Game Was draw, Play Again";
      msg.style.backgroundColor = "#0b084f"
}

// showwinner func

const showWinner = (userWin, userChoice, compChoice) => {
      if (userWin) {
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";

      } else {
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
            msg.style.backgroundColor = "red";


      }
}
const playGame = (userChoice) => {
      const compChoice = genCompChoice();
      if (userChoice === compChoice) {
            drawGame();
      } else {
            let userWin = true;
            if (userChoice === "rock") {
                  // scissor, paper
                  userWin = compChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                  // rock, scissor
                  userWin = compChoice === "scissor" ? false : true;
            } else {
                  // rock ,paper
                  userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
      }



}
choice.forEach((choice) => {
      choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
      });
});





