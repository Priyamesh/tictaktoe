console.log("welcome ");

let music= new Audio("music.mp3");
let turnaudio= new Audio("ting.mp3");
let gameover= new Audio("gameover.mp3");
let turn="X";
let isgameover=false;


//chang turn
const changeturn=()=>{
    return turn==="X"?"0":"X";
}

//win logic
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
    wins.forEach((e)=> {
            if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")) {
                document.querySelector('.info').innerHTML = `${boxtexts[e[0]].innerText} Won`;
                console.log(boxtexts[e[0]].innerText);
                isgameover = true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
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
});