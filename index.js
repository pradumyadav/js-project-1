


let HOURS=document.querySelector('.X')
let MIN=document.querySelector('.Y')
let SEC=document.querySelector('.Z')
let output2=document.querySelector('.box1');
let AMPM= document.querySelector('.small2')

function callhear(){
   let time=new Date();
   let hours=time.getHours();
   let mins=time.getMinutes();
   let sec=time.getSeconds();
   if(hours>=1 && hours<=7){
      output2.innerHTML='GOOD NIGHT EVERY ONE'
   }
   else if(hours>=7&& hours<12){
      output2.innerHTML="GOOD MORNING EVERY ONE"

   }
   else if(hours>=12 && hours<18){
      output2.innerHTML="GOOD AFTER NOON EVERY ONE"
   }
   else if(hours>=18 && hours<24){
      output2.innerHTML="GOOD EVENING EVERY ONES"
      
   }
   AMPM.innerHTML="AM" ;
    if(hours>12){
       hours=hours-12;
       
      AMPM.innerHTML="PM" ;
    }


HOURS.innerText=`${hours} HUR`
MIN.innerText=`${mins} MIN`
SEC.innerText=`${sec} SEC`
    
   }
setInterval(()=>{
   callhear()
},1000);
 
let img =document.getElementById('box5')
let output1=document.querySelector('.child1');

let morning_time=document.getElementById('s1');
let lunch_time=document.getElementById('s2')
let nap_time=document.getElementById('s3')
let night_time=document.getElementById('s4')

let show_options1=document.getElementById('change1')
let show_options2=document.getElementById('change2')
let show_options3=document.getElementById('change3')
let show_options4=document.getElementById('change4')


function clickhear(){
   let date=new Date()
   let hrs=date.getHours();
   
   if (hrs === parseInt( morning_time.value)) {
      console.log(morning_time.value);
      output1.innerHTML = "GOOD MORNING!! WAKE UP !!";
  
      img.style.backgroundImage = "url('./mrng.png')";

    } else if (hrs === parseInt(lunch_time.value)) {
      console.log(lunch_time.value);
      output1.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP ";
  
      img.style.backgroundImage = "url('./luch.png')";

    } else if (hrs === parseInt(nap_time.value)) {
      console.log(nap_time.value);
      output1.innerHTML = "GOOD EVENING !! ";
  
      img.style.backgroundImage = "url('./goodevening.png')";

    } else if (hrs === parseInt(night_time.value)) {
      console.log(night_time.value);
      output1.innerHTML = "GOOD NIGHT !!";
  
      img.style.backgroundImage = "url('./GOODNIGHT.png')";
    }
    let morningtext = morning_time.options[morning_time.selectedIndex].textContent;
  let morning = document.getElementById("change1");
  morning.textContent = morningtext;

  let morningtext1 = lunch_time.options[lunch_time.selectedIndex].textContent;
  let morning1 = document.getElementById("change2");
  morning1.textContent = morningtext1;

  let morningtext2 = nap_time.options[nap_time.selectedIndex].textContent;
  let morning2 = document.getElementById("change3");
  morning2.textContent = morningtext2;

  let morningtext3 = night_time.options[night_time.selectedIndex].textContent;
  let morning3 = document.getElementById("change4");
  morning3.textContent = morningtext3;

};














