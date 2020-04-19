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


//PlayPause button text change

const button = document.getElementById('playpause');

const changeText = () => {
    if (button.innerText === "Play") {
        button.innerText = "Pause";
    } else {
        button.innerText = "Play";
    }
}

//PlayPause button main function

let loopVar = setInterval(transitionSlideForward, 3000); // will play when page loads by default


const playPause = () => {
    if (button.innerText == "Play") {
        loopVar = setInterval(transitionSlideForward, 3000);  // reassign loopVar to initial value when "Play" is pressed.
    } else {
        clearInterval(loopVar);                          // clear loopVar interval when "Pause" is pressed
    }
}

//PlayPause button invoke functions
button.addEventListener("click", playPause);
button.addEventListener("click", changeText);

//Add functionality to next image / previous image buttons

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const forwardResetTimer = () => { // function to slide forward and reset auto loop
    transitionSlideForward();
    if (button.innerText == "Pause"){
        clearInterval(loopVar);
        loopVar = setInterval(transitionSlideForward, 3000);
}
}

const backwardResetTimer = () => {//function to slide backward and reset auto loop
    transitionSlideBackward();
    if (button.innerText == "Pause"){
        clearInterval(loopVar);
        loopVar = setInterval(transitionSlideForward, 3000);
    }
}

// Clone image loop.



nextBtn.addEventListener("click", forwardResetTimer);
prevBtn.addEventListener("click", backwardResetTimer);


