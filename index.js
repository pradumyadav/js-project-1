let HOURS=document.querySelector('.X')
let MIN=document.querySelector('.Y')
let SEC=document.querySelector('.Z')
let change="GOOD MORNING"
function callhear(){
   let time=new Date();
   let hours=time.getHours();
   let mins=time.getMinutes();
   let sec=time.getSeconds();
    if(hours>12){
       hours=hours-12;
    }
HOURS.innerText=hours
MIN.innerText=mins
SEC.innerText=sec

let textchange=document.querySelector('box1')
if(parseInt(hours)>7 && parseInt(hours)<12) {
   textchange.innerText="GOOD MORNING"
}
else if(parseInt(hours)>1 && parseInt(hours)>4){
   textchange.innerText="GOOD AFTER NOON"
}
}

setInterval(()=>{
   callhear()
},1000);


// function change(){
//    let time=new Date();
//    let hours=time.getHours();
// let textchange=document.querySelector('box1')
// if(hours>7 && hours<12){
//    textchange.innerText="GOOD MORNING"
// }
// else if(hours>1 && hours>4){
//    textchange.innerText="hii"
// }
// }  










