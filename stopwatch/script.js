let clock=document.querySelector("#clock");
let resetbtn=document.getElementById("resetbtn");
let startbtn=document.getElementById("startbtn");
let stopbtn=document.getElementById("stopbtn");
let mseconds = 0;
let seconds=0;
let minutes=0;
let timerid=null;
startbtn.addEventListener("click",()=>{
    if(timerid!==null){
       clearInterval(timerid);      
}
timerid=setInterval(starttimer,10);
});
stopbtn.addEventListener("click",()=>{
    clearInterval(timerid);
});
resetbtn.addEventListener("click",()=>{
    clearInterval(timerid);
   clock.innerHTML='00:00:00';
   mseconds=seconds=minutes=0;

})
const starttimer=()=>{
    mseconds++;
    if(mseconds==100){
        mseconds=0;
        seconds++;
        if(seconds==60){
            seconds=0;
            minutes++;
        }
    }

let msecondsstring=mseconds<10?`0${mseconds}`:mseconds;
let secondsstring=seconds<10?`0${seconds}`:seconds;
let minutestring=minutes<10?`0${minutes}`:minutes;
clock.innerHTML=`${minutestring}:${secondsstring}:${msecondsstring}`;
}