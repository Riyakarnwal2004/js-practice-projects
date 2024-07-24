let inputslider=document.getElementById("inputslider");
let slidervalue=document.getElementById("slidervalue"); 
let passbox=document.getElementById("passbox"); 
let lowercase=document.getElementById("lowercase"); 
let uppercase=document.getElementById("uppercase"); 
let numbers=document.getElementById("numbers"); 
let symbols=document.getElementById("symbols"); 
let gntbtn=document.getElementById("gntbtn"); 
let copyicon=document.getElementById("copyicon");
slidervalue.textContent=inputslider.value;
inputslider.addEventListener("input",()=>{
    slidervalue.textContent=inputslider.value;

})

//generate password function

gntbtn.addEventListener("click",()=>{
    passbox.value=generatePassword();
})
let lowerchar="abcdefghijklmnopqrstuvwxyz";
let upperchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers="0123456789";
let allsymbols="~!@#$%^&*";
const generatePassword=()=>{
 let genpwd="";
 let allchars="";
 allchars+=lowercase.checked?lowerchar:"";
 allchars+=uppercase.checked?upperchar:"";
 allchars+=numbers.checked?allnumbers:"";
 allchars+=symbols.checked?allsymbols:"";

 let i=1;
 while(i<=inputslider.value){
 genpwd+=allchars.charAt(Math.floor(Math.random()*allchars.length));
 i++;
 }
 return genpwd;
}
copyicon.addEventListener("click",()=>{
    if(passbox.value!=""||passbox.value.length>=1){
    navigator.clipboard.writeText(passbox.value);
    copyicon.innerText="check";
    copyicon.title="Password Copied";
    setTimeout(()=>{
        copyicon.innerHTML="content_copy";
        copyicon.title="";
    },3000)
    }
})