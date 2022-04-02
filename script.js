

var qrCode=document.getElementById("qrcode");
var input=document.getElementById("input-text");
var qrBtn=document.getElementById("generate-btn");

qrBtn.addEventListener("click", ()=>{
    var url=`https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${input.value}`;     // qrcode generator api:- https://goqr.me/api/
    qrCode.src=url;
});




