document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll(".slide");
  const slider = document.getElementById('imgcont');
  const goNext = document.getElementById("next");
  const goPrev = document.getElementById("prev");
  let index = 1;
  let intervalId;

  const firstClone = sliders[0].cloneNode(true);
  const lastClone = sliders[sliders.length - 1].cloneNode(true);
 firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
slider.append(firstClone);
slider.prepend(lastClone);
  console.log(sliders[0])

  const slideWidth = sliders[0].clientWidth; 
  slider.style.transform = `translateX(-${slideWidth * index}px)`; 
  console.log(slideWidth)
  const startSlide = () => {
      intervalId = setInterval(() => {
          index++;
          slider.style.transition = "transform 0.5s ease-in-out";
          slider.style.transform = `translateX(-${slideWidth * index}px)`;
          
         
          if (index >= sliders.length + 1) {
              setTimeout(() => {
                  slider.style.transition = "none";
                  index = 1;
                  slider.style.transform = `translateX(-${slideWidth * index}px)`;
              }, 500); 
          }
      }, 3000);
  };
  startSlide();

  const stopSlide = () => {
      clearInterval(intervalId);
  };

  goNext.addEventListener('click', () => {
      stopSlide();
      index++;
      slider.style.transition = "transform 0.5s ease-in-out";
      slider.style.transform = `translateX(-${slideWidth * index}px)`;
      if (index >= sliders.length + 1) {
         setTimeout(() => {
             slider.style.transition = "none";
             index = 1;
              slider.style.transform = `translateX(-${slideWidth * index}px)`;
          }, 500);
      }
      startSlide();
  });

  goPrev.addEventListener('click', () => {
      stopSlide();
      index--;
      slider.style.transition = "transform 0.5s ease-in-out";
      slider.style.transform = `translateX(-${slideWidth * index}px)`;
      if (index <= 0) {
          setTimeout(() => {
              slider.style.transition = "none";
              index = sliders.length;
              slider.style.transform = `translateX(-${slideWidth * index}px)`;
          }, 500);
      }
      startSlide();
  });
});

//let clicks=document.querySelectorAll('.meno')

let Hoome= document.querySelector('.eno1');
let Cours= document.querySelector('.eno2');
let Servic= document.querySelector('.eno3');
let About= document.querySelector('.eno4');
let Contat= document.querySelector('.eno5');

let Cont1=document.getElementById('cont1')
let Cont2=document.getElementById('cont2')
let Cont3=document.getElementById('cont3')
let Cont4=document.getElementById('cont4')
let Cont5=document.getElementById('cont5')

Hoome.addEventListener('click', () => {
   
    Cont1.style.zIndex= `1`;
    Cont2.style.zIndex= `-1`;
    Cont3.style.zIndex= `-2`;
    Cont4.style.zIndex= `-3`;
    Cont5.style.zIndex= `-4`;

});


Cours.addEventListener('click', () => {
    Cont1.style.zIndex= `-1`;
    Cont2.style.zIndex= `1`;
    Cont3.style.zIndex= `-2`;
    Cont4.style.zIndex= `-3`;
    Cont5.style.zIndex= `-4`;

});

Servic.addEventListener('click', () => {
    Cont1.style.zIndex= `-1`;
    Cont2.style.zIndex= `-2`;
    Cont3.style.zIndex= `1`;
    Cont4.style.zIndex= `-3`;
    Cont5.style.zIndex= `-4`;
  });


  About.addEventListener('click', () => {
    Cont1.style.zIndex= `-3`;
    Cont2.style.zIndex= `-1`;
    Cont3.style.zIndex= `-2`;
    Cont4.style.zIndex= `1`;
    Cont5.style.zIndex= `-4`;
  });

  Contat.addEventListener('click', () => {
    Cont1.style.zIndex= `-4`;
    Cont2.style.zIndex= `-1`;
    Cont3.style.zIndex= `-2`;
    Cont4.style.zIndex= `-3`;
    Cont5.style.zIndex= `1`;
  });



let Teacher=document.getElementById("teacher_cont");

let Teachern=document.getElementById("teacher_contt");
let Teacherr=document.getElementById("teacherr_contt");
let Teaccher=document.getElementById("teaccher_cont");
let Teachher=document.getElementById("teachher_cont");

let Tea1=document.querySelector(".tea1");
let Tea2=document.querySelector(".tea2");
let Tea3=document.querySelector(".tea3");
let Tea4=document.querySelector(".tea4");
let Tea5=document.querySelector(".tea5");

Tea1.addEventListener("click", () => {
    
   Teacher.style.zIndex=`1`
   Teachern.style.zIndex=`-1`
   Teacherr.style.zIndex=`-2`
    Teachher.style.zIndex=`-3`
    Teaccher.style.zIndex=`-4`
});

Tea2.addEventListener("click", () => {
    
    Teacher.style.zIndex=`-1`
    Teachern.style.zIndex=`1`
    Teacherr.style.zIndex=`-2`
     Teachher.style.zIndex=`-3`
     Teaccher.style.zIndex=`-4`
 });

 Tea3.addEventListener("click", () => {
    Teacher.style.zIndex=`-1`
    Teachern.style.zIndex=`-2`
     Teacherr.style.zIndex=`1`
     Teaccher.style.zIndex=`-3`
    Teachher.style.zIndex=`-4`
 });

 Tea4.addEventListener("click", () => {
    Teacher.style.zIndex=`-1`
    Teachern.style.zIndex=`-2`
    Teacherr.style.zIndex=`-3`
    Teaccher.style.zIndex=`1`
    Teachher.style.zIndex=`-4`
 });

 Tea5.addEventListener("click", () => {
    Teacher.style.zIndex=`-1`
    Teachern.style.zIndex=`-2`
    Teacherr.style.zIndex=`-3`
    Teaccher.style.zIndex=`-4`
    Teachher.style.zIndex=`1`
 });

 