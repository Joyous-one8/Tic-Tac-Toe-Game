let boxes = document.querySelectorAll(".box");
console.log(boxes)
let resetbtn=document.querySelector(".reset-btn");

let turn=true;

let message=document.querySelector(".message");
let o_score=0;
let x_score=0;
let oscore=document.querySelector(".o-score");
let xscore=document.querySelector(".x-score");

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="O";
            turn=false
        }else{
            box.innerText="X";
            turn=true
        }
        box.disabled=true;
        
        checkWinner();
        });
});


const checkWinner=()=>{
    for (let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if (pos1===pos2 && pos2===pos3){
                console.log("winner")
                message.innerText=(pos1+" "+"IS WINNER!")
                setTimeout(resetGame, 1200);
                if (pos1==="O"){
                    o_score++;
                }
                if (pos1==="X"){
                    x_score++;
                }
                oscore.innerText="O:"+String(o_score);
                xscore.innerText="X:"+String(x_score)
            }       
        }
    }
}

let reset=document.querySelector(".reset-btn");

reset.addEventListener("click",()=>{
    resetGame();
});

const resetGame=()=>{
    for(let pattern of winPatterns){
        boxes[pattern[0]].innerText="";
        boxes[pattern[1]].innerText="";
        boxes[pattern[2]].innerText="";
    };
    boxes.forEach((box)=>{
        box.disabled=false;
    })
}