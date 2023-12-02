// if score is not null, get it from local store; if it is false / null, set a default value
let score = JSON.parse(localStorage.getItem('score')) || 
{
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function updateScoreElement()
{
    document.querySelector(".js-score").innerHTML = 
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Wrte a function that generate a computer input when given a user input, then output a string that shows who is winner
function playGame(userInput, userInputNumber)
{
    
    let randomNumber = Math.random();
    let aiInput = "";
    if(randomNumber >= 0 && randomNumber < 1/3)
    {
        aiInput = "Rock";
        
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3)
    {
        aiInput = "Paper";
    }
    else if (randomNumber >= 2/3 && randomNumber < 1)
    {
        aiInput = "Scissors";
    }

    //if AI pick anything that will win
    if ((randomNumber - userInputNumber) >= 1/3 && (randomNumber - userInputNumber) < 2/3 || aiInput === "Rock" && userInput === "Scissors")
    {
        console.log("AIinput: " + aiInput, "AInumber: " + randomNumber);
        score.losses += 1;
        /*
        alert(`The AI choose ${aiInput} you pick  ${userInput} , you lose, 
        Wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`);
        */
        result = `You lose`;
        move = `You <img src='image/${userInput}-emoji.png' class = "move-icon"> 
            <img src='image/${aiInput}-emoji.png' class = "move-icon"> Computer `;
        
    }
    //if AI pick anything that will lose
    else if ((userInputNumber - randomNumber) >= 1/3 && (userInputNumber - randomNumber) < 2/3 || userInput === "Rock" && aiInput === "Scissors")
    {
        console.log("AIinput: " + aiInput, "AInumber: " + randomNumber);
        score.wins += 1;
        /*
        alert(`The AI choose ${aiInput} , you pick ${userInput}, you win
        Wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`);
        */
        result = `You win`;
        move = `You <img src='image/${userInput}-emoji.png' class = "move-icon"> 
        <img src='image/${aiInput}-emoji.png' class = "move-icon"> Computer `;
        
    }
    //If it would ends in a draw
    else if (userInput === aiInput)
    {
        console.log("AIinput: " + aiInput, "AInumber: " + randomNumber);
        score.ties += 1;
        /*
        alert(`The AI choose ${aiInput} , you pick ${userInput} , it is a draw
        Wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`);
        */
        result = `You tied`;
        move = `You <img src='image/${userInput}-emoji.png' class = "move-icon"> 
            <img src='image/${aiInput}-emoji.png' class = "move-icon"> Computer `;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(".js-move").innerHTML = move;

}