// about
const experienceContent = document.querySelector('.experience-part');
const skillContent = document.querySelector('.skill-part');
const missionContent = document.querySelector('.mission-part');

const ExperienceBtn = document.querySelector('.choice-menu-first');
ExperienceBtn.addEventListener('click' , ()=>{
  experienceContent.classList.add('active');
  skillContent.classList.remove('active');
  missionContent.classList.remove('active');
  ExperienceBtn.classList.add('active');
  skillBtn.classList.remove('active');
  missionBtn.classList.remove('active');

})

const skillBtn = document.querySelector('.choice-menu-second');
skillBtn.addEventListener('click' , ()=>{
    skillContent.classList.add('active');
  experienceContent.classList.remove('active');
  missionContent.classList.remove('active');
  skillBtn.classList.add('active');
  ExperienceBtn.classList.remove('active');
  missionBtn.classList.remove('active');

})

const missionBtn = document.querySelector('.choice-menu-third');
missionBtn.addEventListener('click' , ()=>{
    skillContent.classList.remove('active');
  experienceContent.classList.remove('active');
  missionContent.classList.add('active');
  missionBtn.classList.add('active');
  skillBtn.classList.remove('active');
  ExperienceBtn.classList.remove('active');


})

// gallery section
// Owl Carosol second
$('.destination-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  })
  
//   say section
// Owl carosol

$('.saySection-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })

  