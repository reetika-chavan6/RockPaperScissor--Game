let user_score=0;
let comp_score=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_score_para=document.querySelector("#user-score");
const comp_score_para=document.querySelector("#comp-score");

const getCompChoice=()=>{
    let option=["rock","paper","scissor"]
    let radIdx=Math.floor(Math.random() *3)
    return option[radIdx]
};

const GameDraw=()=>{
    msg.innerText="it`s a Draw.play again.";
    msg.style.backgroundColor="#F1C40F";
    msg.style.color="black";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        user_score++;
        user_score_para.innerText=user_score;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#4CAF50";
        msg.style.color="white";
    }else{
        comp_score++;
        comp_score_para.innerText=comp_score;
        msg.innerText=`you loss.! ${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor="#E74C3C";
        msg.style.color="white";
    }
};

const playGame=(userChoice)=>{
    const compChoice=getCompChoice();
    if(userChoice===compChoice){
        GameDraw();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
        // computer choice may be paper,scissor
        userWin=compChoice==="paper"?false:true;
        }else if (userChoice==="paper"){
            //comp choice may be rock ,scissor
            userWin=compChoice==="scissor"?false:true;
        }else{
            //comp choice may be rock ,papper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
