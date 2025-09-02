let box = document.querySelectorAll(".work")
let reset = document.querySelector("#reset")
let newGameBtn = document.querySelector("#new");
let message = document.querySelector(".message");
let msg = document.querySelector("#msg");


let turnO =true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

box.forEach((box) =>{
    box.addEventListener( "click" , () =>{
        console.log("boxwasclick");
        if (turnO){
            box.innerText="O";
            turnO=false;
            

        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});


const resetGame =() => {
    turnO=true;
    enabelBoxes();
    message.classList.add("hide");

}
const disabledBoxes = () => {
    for(let boxes of box ){
        boxes.disabled =true;
    }
}
const enabelBoxes = () => {
    for(let boxes of box ){
        boxes.disabled =false;
        boxes.innerText="";
    }
}

const showWinner = (winner) => {
    msg.innerText =`congratulation winner is ${winner}`;
    message.classList.remove("hide");
    disabledBoxes();


}

const checkWinner = () => {
    for(let pattern of winPattern){
        
        let pos1val=box[pattern[0]].innerText;
        let pos2val=box[pattern[1]].innerText;
        let pos3val=box[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" &&pos3val != ""){
            if (pos1val==pos2val && pos2val==pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
        
    }
    
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);