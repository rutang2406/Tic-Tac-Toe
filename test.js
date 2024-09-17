const boxes=document.querySelectorAll(".box");
const reset=document.querySelector(".reset");
let playerO=false;
let playerX=true;
let iswinner=false;
let winningcomb=[[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
let winer=document.querySelector("#winner");
let movecount=0;
boxes.forEach((box)=>{box.addEventListener("click",()=>{
    if(playerO){
        box.innerHTML="O";
        playerO=false;
        playerX=true;
    }
    else{
        box.innerHTML="X";
        playerX=false;
        playerO=true;
    }
    box.disabled=true;
    movecount++;
    winner();
    }
)})
const calldraw=()=>{
    winer.textContent=`Match is Draw`;
}
const winner=()=>{
    for(let patterns of winningcomb){
       let pos1=boxes[patterns[0]].textContent;
       let pos2=boxes[patterns[1]].textContent;
       let pos3=boxes[patterns[2]].textContent;
       if(pos1!=="" && pos2!=="" && pos3!==""){
        if(pos1==pos2 && pos2==pos3){
           winer.innerText=`Player with ${pos1} is winner`
           console.log(movecount);
           iswinner=true;
           boxes.forEach((box)=>{
            box.disabled=true;
           }); 
           break;
        }
        }
    }
    if(!iswinner && movecount==9){
        calldraw();
    }
       
}
reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML="";
        winer.innerText=""
        box.disabled=false;
    })    
})