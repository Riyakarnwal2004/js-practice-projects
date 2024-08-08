const qrtext=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const gntbtn=document.getElementById('gntbtn');
const dwdbtn=document.getElementById('dwdbtn');
const qrcontainer=document.querySelector('.qr-body');

let size=sizes.value;
gntbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(qrtext.value.length>0)
    generateQRCODE();
else{
    alert("enter your text to generate qr");
}
})
sizes.addEventListener("change",(e)=>{
    size=e.target.value;
    if(qrtext.value.length>0)
        generateQRCODE();
    else{
        alert("enter your text to generate qr");
    }
})
function generateQRCODE(){
    qrcontainer.innerHTML="";
    if(size>200)
    qrcontainer.style.border="2px solid white";
    new QRCode(qrcontainer,{
        text:qrtext.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}