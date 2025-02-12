/*Palete
#536B78 dark
#637081
#7C98B3
#ACCBE1
#CEE5F2 light

secondary
#FF006E pink
#8338EC purple
#FFBE0B yellow
#FB5607 orange
#3A86FF blue
*/

let boxes=document.querySelectorAll('.box')
let reset=document.querySelectorAll('.reset')
let turn=0
let winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let winmsg=document.querySelector('#win-msg')
let winmsgtext=document.querySelector('#win-text')
let moves=0;
let turntext=document.querySelector('#turn-text')
let clicksound=new Audio('audio/click.mp3')
let gameoversound=new Audio('audio/game-over.mp3')


turntext.innerText=`It's Player ${turn+1}'s turn`

boxes.forEach((box)=>box.addEventListener("click",()=>{
    if(box.innerText==""){

    if (turn==0){
        box.innerText="o"
        box.style.color="#CEE5F2"
        turn=1
    }
    else{
        box.innerText="x"
        box.style.color="#CEE5F2"
        turn=0
    }
    clicksound.play()
    moves+=1;
    detectWin();
    turntext.innerText=`It's Player ${turn+1}'s turn`
    }
}))
function detectWin(){
    winPatterns.forEach((pattern)=>{
        let b1=boxes[pattern[0]].innerText
        let b2=boxes[pattern[1]].innerText
        let b3=boxes[pattern[2]].innerText
        if (b1==b2 && b2==b3 && b3!="" ){
            console.log("winner")
            winmsg.style.display="flex"
            if(turn==0){
                winmsgtext.innerText=`Player ${turn+2} is Winner`
            }else{
                winmsgtext.innerText=`Player ${turn} is Winner`
            }
            gameoversound.play()
        }
        else{
            detectDraw();
        }
    })
}
function detectDraw(){
    if(moves==9){
        winmsg.style.display="flex"
        winmsgtext.innerText=`Draw`
        gameoversound.play()
    }
}
reset.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        clicksound.play()
        winmsg.style.display="none"
        boxes.forEach((box)=>{
            box.innerText=""
            moves=0
        })
    })
})