const carouselSlide = document.querySelector(".my-slides");
const images = document.querySelectorAll(".my-slides img");
console.log(images)

// counter
let counter = 0;
const scrollWidth = images[0].clientWidth;

//transition slide functions
const transitionSlideForward = () => { 
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + -scrollWidth * counter + "px)";

}

const transitionSlideBackward= () => { 
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + -scrollWidth * counter + "px)";

}

// automatic play function

const autoLoop = () => {
    setInterval(transitionSlideForward, 3000);
  }


autoLoop();

//PlayPause button text change

const button = document.getElementById('playpause');

const changeText = () => {
    if (button.innerText === "Play") {
        button.innerText = "Pause";
    } else {
        button.innerText = "Play";
    }
}

button.addEventListener("click", changeText);


