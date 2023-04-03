let HOURS=document.querySelector('.X')
let MIN=document.querySelector('.Y')
let SEC=document.querySelector('.Z')

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
   }
setInterval(()=>{
   callhear()
},1000);
 


let time=new Date();
let hours=time.getHours();

let morning=document.querySelector('#s1');
let lunchtime=document.querySelector('#s2');
let eveningtime=document.querySelector('#s3');
let nighttime=document.querySelector('#s4');
let change2 =document.querySelector('.child1');
let change =document.querySelector('.child2');

function cleckhear(){
   if(parseInt(morning.value) === hours ){
      change2.innerText="GOOD MORNING!!WAKE UP!!"
      img.src = "./Component 31 - 1.svg"
   }
   if(parseInt(lunchtime.value) === hours){
      change2.innerText="outh ja bhai kab tak soye ga"
      img.src ="./Component 31 - 1.svg"

   }
   if(parseInt(eveningtime.value)=== hours){
      change2.innerText = "chay time"
      img.src = "./Component 32 - 1.svg"
   }
}















