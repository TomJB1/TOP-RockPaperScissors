function computerRandomChoice()
{
    rnumb = Math.floor(Math.random() * 4);
    
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

