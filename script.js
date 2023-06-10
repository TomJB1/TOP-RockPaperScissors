
const computerDiv = document.getElementById("compChoice");
const resultDiv = document.getElementById("outcome");

const scoreDiv = document.getElementById("score");
const computerScoreDiv = document.getElementById("compScore");

const winnerDiv = document.getElementById("winner");

let score = 0;
let computerScore = 0;

function computerRandomChoice()
{
    rnumb = Math.floor(Math.random() * 3);
    
    switch(rnumb)
    {
        case 0:
            choice = "Rock";
        break;

        case 1:
            choice = "Paper";
        break;

        case 2:
            choice = "Scissors";
        break;

    }

    return choice

}

function getInput()
{
    playerchoice = prompt("enter")

    return playerchoice
}

function evaluateWinner(player, computer)
{
    if (player == "Rock")
    {
        switch(computer)
        {
            case "Rock":
                outcome = "draw";
            break;

            case "Paper":
                outcome = "lose";
            break;

            case "Scissors":
                outcome = "win";
            break;
        }
    }

    if (player == "Paper")
    {
        switch(computer)
        {
            case "Rock":
                outcome = "win";
            break;

            case "Paper":
                outcome = "draw";
            break;

            case "Scissors":
                outcome = "lose";
            break;
        }
    }

    if (player == "Scissors")
    {
        switch(computer)
        {
            case "Rock":
                outcome = "lose";
            break;

            case "Paper":
                outcome = "win";
            break;

            case "Scissors":
                outcome = "draw";
            break;
        }
    }

    return outcome
}

function play(e)
{
    player = e.target.getAttribute('data-choice');
    if(!player) return
    computer = computerRandomChoice()
    result = evaluateWinner(player, computer);
    switch(result)
    {
        case "win":
            score++;
        break;
        case "lose":
            computerScore++;
        break;
    }
    console.log(`E: ${e};  Player: ${player};  Computer: ${computer};  Result: ${result}`)

    resultDiv.innerText = result;
    computerDiv.innerText = computer;

    scoreDiv.innerText = score;
    computerScoreDiv.innerText = computerScore;
    if(score > 4)
    {
        winnerDiv.innerText = "You Win"
    }

    if(computerScore > 4)
    {
        winnerDiv.innerText = "You Lose. I win."
    }
}

window.addEventListener('click', play)