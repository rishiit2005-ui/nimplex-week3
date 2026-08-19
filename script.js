console.log("game ready");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

function computerPick() {
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);

    return choices[random];
}

function whoWins(you, computer) {

    if (you === computer) {
        return "tie";
    }

    if (
        (you === "rock" && computer === "scissors") ||
        (you === "paper" && computer === "rock") ||
        (you === "scissors" && computer === "paper")
    ) {
        return "you";
    }

    return "computer";
}

function play(you) {

    let computer = computerPick();
    let winner = whoWins(you, computer);

    console.log("You:", you);
    console.log("Computer:", computer);
    console.log("Winner:", winner);

    if (winner === "you") {
        document.querySelector("#result").textContent =
            `You win! ${you} beats ${computer}.`;
    }
    else if (winner === "computer") {
        document.querySelector("#result").textContent =
            `Computer wins! ${computer} beats ${you}.`;
    }
    else {
        document.querySelector("#result").textContent =
            "It's a tie!";
    }
}

rock.addEventListener("click", function () {
    play("rock");
});

paper.addEventListener("click", function () {
    play("paper");
});

scissor.addEventListener("click", function () {
    play("scissor");
});