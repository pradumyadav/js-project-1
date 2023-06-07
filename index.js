


let HOURS=document.querySelector('.X')
let MIN=document.querySelector('.Y')
let SEC=document.querySelector('.Z')
let output2=document.querySelector('.box1');
function callhear(){
   let time=new Date();
   let hours=time.getHours();
   let mins=time.getMinutes();
   let sec=time.getSeconds();
   if(hours>=1 && hours<=7){
      output2.innerHTML='GOOD NIGHT EVERY ONE'
   }
   else if(hours>=7&& hours<=12){
      output2.innerHTML="GOOD MORNING EVERY ONE"

   }
   else if(hours>=12 && hours<=18){
      output2.innerHTML="GOOD AFTER NOON EVERY ONE"
   }
   else if(hours>=18 && hours<=24){
      output2.innerHTML="GOOD EVENING EVERY ONES"
      
   }
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
 
let output1=document.querySelector('.child1');
let image=document.querySelector('img');
let morning_time=document.getElementById('s1');
let lunch_time=document.getElementById('s2')
let nap_time=document.getElementById('s3')
let night_time=document.getElementById('s4')

let morning=document.getElementById('s1');
let lunch=document.getElementById('s2')
let nap=document.getElementById('s3')
let night=document.getElementById('s4')
let show_options1=document.getElementById('change1')
let show_options2=document.getElementById('change2')
let show_options3=document.getElementById('change3')
let show_options4=document.getElementById('change4')

function clickhear(){
   let date=new Date()
   let hrs=date.getHours();
   // if (hrs>12){hrs=hrs-12}
   console.log(hrs);
   console.log(morning_time.value)
if(parseInt(morning_time.value) === hrs){
   output1.innerHTML='GOOD MORNING!!WAKE UP!!'
image.src='./Component 30-1.svg'
}
else if(parseInt(lunch_time.value === hrs)){
   output1.innerHTML="Let's go for lunch"
   image.src='./Component 31-1(1).svg'
}
else if(parseInt(nap_time.value) === hrs){
   output1.innerHTML="Go for sleep"
   image.src='./good night_image.svg'
}
else if(parseInt(night_time.value) === hrs){
   output1.innerHTML="Good Night"
   image.src='./good night_image.svg'
}
else{
   console.log('sorry')
}

let selectindex1=morning.selectedIndex ;
let targetindex1=morning.options[selectindex1]
show_options1.innerHTML=targetindex1.innerHTML

let selectindex2=lunch.selectedIndex ;
let targetindex2=lunch.options[selectindex2]
show_options2.innerHTML=targetindex2.innerHTML

let selectindex3=nap.selectedIndex ;
let targetindex3=nap.options[selectindex3]
show_options3.innerHTML=targetindex3.innerHTML

let selectindex4=night.selectedIndex ;
let targetindex4=night.options[selectindex4]
show_options4.innerHTML=targetindex4.innerHTML

}

// let morning=document.getElementById('s1');
// let lunch=document.getElementById('s2')
// let nap=document.getElementById('s3')
// let night=document.getElementById('s4')
// let show_options1=document.getElementById('change1')
// let show_options2=document.getElementById('change2')
// let show_options3=document.getElementById('change3')
// let show_options4=document.getElementById('change4')

// function cleckhear() {
//    let selectindex1=morning.selectedIndex ;
//    let targetindex1=morning.options[selectindex1]
//   show_options1.innerHTML=targetindex1.innerHTML

//   let selectindex2=lunch.selectedIndex ;
//    let targetindex2=lunch.options[selectindex2]
//   show_options2.innerHTML=targetindex2.innerHTML

//   let selectindex3=nap.selectedIndex ;
//    let targetindex3=nap.options[selectindex3]
//   show_options3.innerHTML=targetindex3.innerHTML
  
//   let selectindex4=night.selectedIndex ;
//    let targetindex4=night.options[selectindex4]
//   show_options4.innerHTML=targetindex4.innerHTML

// }










