let hr=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

function displayTime(){
    let time=new Date();

    let hh=time.getHours();
    let mm=time.getMinutes();
    let ss=time.getSeconds();

    let hRotation = 30*hh+ mm/2;
    let mRotaion= 6*mm;
    let sRotation = 6*ss;

    hr.style.transform= `rotate(${hRotation}deg)`;
    min.style.transform= `rotate(${mRotaion}deg)`;
    sec.style.transform= `rotate(${sRotation}deg)`;


}
setInterval(displayTime,1000);