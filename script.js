console.log("Play Game!!!")

const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissor=document.querySelector("#scissor");

const result=document.querySelector("#result");

function computerchoice(){
    const choice=["rock","paper","scissor"];

    const randomnum=Math.floor(Math.random()*3);

    return choice[randomnum];
}



rock.addEventListener("click",function(){
    const computer=computerchoice();
    result.textContent="you : rock || computer :"+computer;
});
paper.addEventListener("click",function(){
    const computer=computerchoice();
    result.textContent="you : paper || computer :"+computer;
});
scissor.addEventListener("click",function(){
    const computer=computerchoice();
    result.textContent="you : scissor || computer :"+computer;

});
