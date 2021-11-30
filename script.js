console.log("welcome ");

let music= new Audio("music.mp3");
let turnaudio= new Audio("ting.mp3");
let gameover= new Audio("gameover.mp3");
let turn="X";
let isgameover=false;
let playerx=0;
let player0=0;


//chang turn
const changeturn=()=>{
    return turn==="X"?"0":"X";
}

//win logic
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[ [0,1,2,0,6,0], [3,4,5,0,18,0], [6,7,8,0,30,0], 
                [0,3,6,12,18,90], [1,4,7,0,18,90], [2,5,8,12,18,90], 
                [0,4,8,0,18,45], [2,4,6,0,18,135] ];
    wins.forEach((e)=> {
            if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")) {
                document.querySelector('.info').innerHTML = `${boxtexts[e[0]].innerText} Won`;
                isgameover = true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
                document.querySelector('.line').style.width="36vw";
                document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                gameover.play();

                if(boxtexts[e[0]].innerText==='X')
                    playerx++;
                else
                    player0++;
                
                document.getElementById('player1').textContent=playerx;
                document.getElementById('player2').textContent=player0;
                
                setTimeout(function(){
                    reset.click();
                }, 2000); 
                
            }
        });
};


//game logic
let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        boxtext.innerHTML=turn;
        turnaudio.play();
        turn=changeturn();
        checkwin();
        if(!isgameover)
            document.getElementsByClassName('info')[0].innerHTML=`Turn for ${turn}`;
    });
    
});

let reset=document.querySelector('#reset');
reset.addEventListener('click',()=>{
    let boxtexts=document.getElementsByClassName('boxtext')
    Array.from(boxtexts).forEach((e)=>{
        e.innerHTML="";
    });
    turn="X";
    isgameover=false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    document.getElementsByClassName('info')[0].innerHTML=`Turn for ${turn}`;
    document.querySelector('.line').style.width="0vw";
});