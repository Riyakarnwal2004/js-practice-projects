
let hr=document.getElementById("hr");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

const displaytime=()=>{
    let date=new Date();
    let hh=date.getHours();
    let mh=date.getMinutes();
    let sh=date.getSeconds();
     
    let hrotation=30*hh+mh/2;
    let mrotation=6*mh;
    let srotation=6*sh;
     hr.style.transform=`rotate(${hrotation}deg)`;
     min.style.transform=`rotate(${mrotation}deg)`;
     sec.style.transform=`rotate(${srotation}deg)`;

}

setInterval(displaytime,1000);