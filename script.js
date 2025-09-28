let hrs =document.getElementById('hours');
let mins =document.getElementById('minutes');
let sec =document.getElementById('seconds');
let ampm =document.getElementById('ampm');
let btn = document.getElementById('btn');
let is24 =true;

function updateClock(){
    let dateobject = new Date();
    let hours = dateobject.getHours();
    let minutes =dateobject.getMinutes();
    let seconds = dateobject.getSeconds();
    
    if(!is24){
        ampm.innerHTML = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12;
        if(hours !== 0){
            hours = hours;
        }else{
            hours = 12;
        }
    }
    if(is24){
        ampm.innerHTML = ' ';
    }
    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    hrs.innerHTML =hours;
    mins.innerHTML =minutes;
    sec.innerHTML =seconds;
}
setInterval(updateClock,1000);

btn.onclick = function(){
    is24 = !is24;
    btn.textContent = is24 ? 'Switch to 12-hour' : 'Switch to 24-hour';
    updateClock();
}