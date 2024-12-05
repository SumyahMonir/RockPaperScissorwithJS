let choices = document.querySelectorAll(".mchoice");
let mRock = document.querySelector(".Rockm");
let mPaper = document.querySelector(".Paperm");
let mScissor = document.querySelector(".Scissorm");
let cRock = document.querySelector(".Rockc");
let cPaper = document.querySelector(".Paperc");
let cScissor = document.querySelector(".Scissorc");
let Me=0;
let Computer=0;


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        removepic();
        const choiceid = choice.getAttribute("id");
        showmine(choiceid);
        let comp = whichone();
        showhis(comp);
        anounce(choiceid,comp);
        compare(choiceid,comp);
    })
})


const removepic = () => {
    mRock.classList.add("hide");
    mPaper.classList.add("hide");
    mScissor.classList.add("hide");
    cRock.classList.add("hide");
    cPaper.classList.add("hide");
    cScissor.classList.add("hide");
}


const showmine = (choiceid) => {
    if (choiceid === "rock")
        mRock.classList.remove("hide");
    else if (choiceid === "paper")
        mPaper.classList.remove("hide");
    else
        mScissor.classList.remove("hide");
}


const whichone = () => {
    let num =Math.floor(Math.random() * 3);
    return num;
}


const showhis = (comp) => {
    if (comp === 0)
        cRock.classList.remove("hide");
    else if (comp === 1)
        cPaper.classList.remove("hide");
    else
        cScissor.classList.remove("hide");
}

let referee=document.querySelector(".referee");

const anounce=(choiceid,comp)=>{
    if((choiceid==="paper" && comp==0)||(choiceid==="rock" && comp==1)){
        referee.innerText="Paper BEATS Rock";
    }
    else if((choiceid==="scissor" && comp==0)||(choiceid==="rock" && comp==2)){
        referee.innerText="Rock BEATS Scissor";
    }
    else if((choiceid==="scissor" && comp==1)||(choiceid==="paper" && comp==2)){
        referee.innerText="Scissor BEATS Paper";
    }
    else {
        referee.innerText="DRAW";
    }
}

let myscore=document.querySelector("#myscore");
let compscore=document.querySelector("#compscore");

const compare=(choiceid,comp)=>{
    if((choiceid==="paper" && comp==0)||(choiceid==="rock" && comp==2)||(choiceid==="scissor" && comp==1)){
        Me++;
        myscore.innerText=Me;
    }
    else if((choiceid==="scissor" && comp==0)||(choiceid==="rock" && comp==1)||(choiceid==="paper" && comp==2)){
        Computer++;
        compscore.innerText=Computer;
    }
}
 let btn=document.querySelector(".button");

btn.addEventListener("click",()=>{
    Me=0;
    Computer=0;
    myscore.innerText=Me;
    compscore.innerText=Computer;
    referee.innerText="START";
    removepic();
})