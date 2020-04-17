const carouselSlide = document.querySelector(".my-slides");
const images = document.querySelectorAll(".my-slides img");
console.log(images)

// counter
let counter = 0;
const scrollWidth = images[0].clientWidth;

//transition slide
const transitionSlideForward = () => { 
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + -scrollWidth * counter + "px)";

}

const transitionSlideBackward= () => { 
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + -scrollWidth * counter + "px)";

}


const autoLoop = () => {
    setInterval(transitionSlideForward, 3000);
  }

  autoLoop();