var time;
var count=0;
var secs=0;
var mins=0;
var timeToshow="00:00";

function start(){
    if(!time){
        console.log(time);
   time=setInterval(update,1000);
   console.log(time);
    }
}

function update(){
     ++secs;
     console.log(secs);
     if(secs==60){
         ++mins;
         this.secs=0;
     }
    document.getElementById('show').innerHTML= getMinutes()+getSeconds();
}

function getSeconds(){
  if(this.secs<10){
     return ":0"+this.secs;
  }else{
     return ":"+this.secs; 
  }
}

function getMinutes(){
 if(this.mins<10){
    return "0"+this.mins+":";
 }else{
    return this.mins+":";
  }
}

function stop(){
    if(time){
    console.log(time);
    clearInterval(time);
    console.log(time);
    time=null;
    console.log(time);
    }
}
function reset(){
    this.stop();
    this.secs=0;
    this.mins=0;
    document.getElementById('show').innerHTML="00:00";
}
