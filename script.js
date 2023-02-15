function computerRandomChoice()
{
    rnumb = Math.floor(Math.random() * 4);
    
    switch(rnumb)
    {
        case 0:
            choice = "Rock"
        break;

        case 1:
            choice = "Paper"
        break;

        case 2:
            choice = "Scissors"
        break;
    }
}