let userScore=0;
let computerScore=0;
let draw=0;
let count=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");
const drawScorePara=document.querySelector("#draw-count");
const totalPlayPara=document.querySelector("#play-count");

const genComputerChioce=()=>{
    // rock, paper, scissors
    const options=["rock","paper","scissors"];
    // Math.random()*3;   generate point value , choice random between (0-2)th index so mutiply the math.random *3    
    const randomIdx=Math.floor(Math.random()*3);// no point value 
    return options[randomIdx];
}

const drawGame=()=>{
    console.log("Game was draw.");
    msg.innerText=("Game was Draw. Play Again.");
    msg.style.backgroundColor="blue";
    draw++;
    drawScorePara.innerText=draw;
}

const showWinner=(userWin, userChoice, computerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win");
        msg.innerText=`You Win! your ${userChoice} beats computer ${computerChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        computerScorePara.innerText=computerScore;
        console.log("You Lose");
        msg.innerText=`You Lose. computer ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice: ",userChoice);

    //Generatee computer choice -> modular
    const computerChoice=genComputerChioce();
    console.log("computer choice is: ",computerChoice);

    if(userChoice===computerChoice){
        // Draw game check
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice==="rock"){
            //computerChoice - paper, scissors
            userWin=computerChoice==="paper"? false :true;
        }
        else if(userChoice==="paper"){
           //computerChoice - rock, scissors 
            userWin==computerChoice=="scissors" ? false :true;
        }
        else{ // userChoice = scissors
            //computerChoice - rock, paper
            userWin=computerChoice==="rock"? false :true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
   
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked","id",userChoice);
        count++;
        totalPlayPara.innerText=count;
        playGame(userChoice);
    });
});
