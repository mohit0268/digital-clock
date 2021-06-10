var Hours=document.querySelector("#hours");
var Minutes=document.querySelector("#minutes")
var Seconds=document.querySelector("#seconds");
var AMPM=document.querySelector("ampm");

function clock(){
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

var am="AM";
    if(h>12){
        h=h-12;
        var am="PM"
    }

        h=(h<10) ? "0" + h : h;
        m=(m<10) ? "0" + m : m;
        s=(s<10) ? "0" + s : s;

        Hours.innerText=h;
        Minutes.innerText=m;
        Seconds.innerText=s;
}


        var interval=setInterval(clock,1000)