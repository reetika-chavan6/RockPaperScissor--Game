let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let welcome=document.querySelector(".welcome");
let start=document.querySelector("#start");
let main=document.querySelector("main");
let player1Input=document.querySelector("#name1");
let player2Input=document.querySelector("#name2");
let back=document.querySelector("#back");


let player1="player O"
let player2="player x"



start.addEventListener("click", () => {
    // get names from inputs
    if(player1Input.value.trim() !== "") player1 = player1Input.value;
    if(player2Input.value.trim() !== "") player2 = player2Input.value;

    welcome.style.display = "none";
    main.style.display = "block";

});

let turnX=false;
let count=0;

const WinPatterns=[
    [0,1,2],[0,4,8],[0,3,6],
    [1,4,7],[2,5,8],[3,4,5],
    [6,7,8],[2,4,6]
];

const enableboxes=()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

};

const resetGame=()=>{
    turnX=true;
    count=0;
    enableboxes();
    msgContainer.classList.add("hide");
    main.style.display="block";
};

const gameDraw=()=>{
    msg.innerText=`Game was draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=()=>{
    for(let pattern of WinPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                if(pos1Val==="O"){
                showWinner(player1);
                }
                else{
                showWinner(player2);
                }
                return true;
            }
        }
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X";
            turnX=false;
        }else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count==9 && !isWinner){
            gameDraw();
        }
    });
});

const showWinner=(Winner)=>{
    msg.innerText=`congratulation,winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    main.style.display="none";
    disableBoxes();
    
};

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
back.addEventListener("click",()=>{
    main.style.display="none";
    welcome.style.display="block";
})