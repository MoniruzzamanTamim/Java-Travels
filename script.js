


// ?menu part working
const headermenu =  document.querySelector('#main-header');
const HeaderIcon = document.querySelector('.topheader-content');

document.querySelector('#menubars').addEventListener('click', ()=>{
  headermenu.classList.toggle('active');
  HeaderIcon.classList.remove('active');
 
})

document.querySelector('#dotmenu').addEventListener('click', ()=>{
 
  HeaderIcon.classList.toggle('active');
  headermenu.classList.remove('active');
})


const mainHeader = document.querySelector('#main-header');
window.addEventListener('scroll' , ()=>{
  if (scrollY > 0 ) {
    mainHeader.classList.add('showtop');
  } else {
    mainHeader.classList.remove('showtop');
    
  }
})


// Contact Page Start
const formFontrol = document.querySelectorAll('.form-control');
const nameadress= document.getElementById("nameadress");
const phoneaddress= document.getElementById("phoneaddress");
const emailadress= document.getElementById("emailadress");
const submitBtn= document.getElementById("submitBtn");
const nameMessage = document.getElementById("nameMessage");
const emailMessage = document.getElementById("emailMessage");
const phoneMessage = document.getElementById("phoneMessage");




// emailadress validation


emailadress.addEventListener("keyup" , ()=>{
   if(!emailadress.value.match(/^[a-z0-9]*[@][a-z]*[\.][a-z]{2,4}$/ )){
    emailMessage.innerHTML =' <i class="fa-solid fa-exclamation"></i> This Mail is Not Valid';
    emailMessage.style.color= "red";
    emailadress.style.borderColor= "red";
    emailadress.style.outline= "none";
    return false;

   }else{
    emailMessage.innerHTML = " ";
    emailadress.style.borderColor= "#9b9b9b";
    return true;

   }
})
phoneaddress.addEventListener("keyup" , ()=>{
  if(!phoneaddress.value.match(/^[0-1]{2}[1-9]{9,9}/ )){
    phoneMessage.innerHTML ='Number not match';
    phoneMessage.style.color= "red";
    phoneMessage.style.borderColor= "red";
    phoneMessage.style.outline= "none";

   return false;

  }else{
    phoneMessage.innerHTML = " ";
      phoneaddress.style.borderColor= "#9b9b9b";
   return true;
  }
 
})
submitBtn.addEventListener("click", ()=>{
  // password match
 if(emailadress.length == '' ){
 alert()
 }
})





// swipper js

const discoverbtnabout = document.querySelector('.discoverbtnabout');
const discoverbtnchoice = document.querySelector('.discoverbtnchoice');
const discoverbtnmission = document.querySelector('.discoverbtnmission');

const discoverabout = document.querySelector('.discoverabout');
const discoverchoice = document.querySelector('.discoverchoice');
const discovermission = document.querySelector('.discovermission');

discoverbtnabout.addEventListener('click' , ()=>{
  discoverabout.classList.add('active');
  discovermission.classList.remove('active');
  discoverchoice.classList.remove('active');
})
discoverbtnchoice.addEventListener('click', ()=>{
  discoverchoice.classList.add('active');
  discoverabout.classList.remove('active');
  discovermission.classList.remove('active');
})

discoverbtnmission.addEventListener('click', ()=>{
  discovermission.classList.add('active');
  discoverchoice.classList.remove('active');
  discoverabout.classList.remove('active');
})







