// set navIcons height

const navIcons = document.getElementsByClassName("nav-icons");
const setNavHeight = () => {

    let navWidth = navIcons[0].clientWidth;
    navIcons[0].style.height = navWidth + "px";
    console.log(navWidth)
    for (let i = 0; i < navIcons.length; i++)  {
        navIcons[i].style.height = navWidth + "px";
    }
}

setNavHeight();
window.addEventListener("resize", setNavHeight);

const aboutMe = document.getElementById('about-me');
const whyProgramming = document.getElementById('why-programming');
const whyFac = document.getElementById('why-fac');
const contactMe = document.getElementById('contact-me');

const navMouseOver = () => {
    let aboutMeWidth = aboutMe.clientWidth;
    aboutMe.style.height = aboutMeWidth + "px";
}

aboutMe.addEventListener("mouseover", navMouseOver);
aboutMe.addEventListener("mouseout", navMouseOver);







//declare carousel variables

const carouselSlide = document.querySelector(".my-slides");
const images = document.querySelectorAll(".my-slides img");
console.log(images) //testing

// counter
let counter = 1;
const scrollWidth = images[1].clientWidth;
carouselSlide.style.transform = "translateX(" + -scrollWidth * counter + "px)";

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
    if (button.innerText === "PLAY") {
        button.innerText = "PAUSE";
    } else {
        button.innerText = "PLAY";
    }
}

//PlayPause button main function

let loopVar = setInterval(transitionSlideForward, 3000); // will play when page loads by default


const playPause = () => {
    if (button.innerText == "PLAY") {
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
    if (button.innerText == "PAUSE"){
        clearInterval(loopVar);
        loopVar = setInterval(transitionSlideForward, 3000);
    }
}

const backwardResetTimer = () => {//function to slide backward and reset auto loop
    transitionSlideBackward();
    if (button.innerText == "PAUSE"){
        clearInterval(loopVar);
        loopVar = setInterval(transitionSlideForward, 3000);
        
    }
    console.log(counter);
}
nextBtn.addEventListener("click", forwardResetTimer);
prevBtn.addEventListener("click", backwardResetTimer);



// Clone image loop. Add event listener for end of transition

carouselSlide.addEventListener("transitionend", () => { // 
    if (images[counter].id == "last-clone") {
        carouselSlide.style.transition = 'none';
        counter = images.length - 2;
        carouselSlide.style.transform = "translateX(" + -scrollWidth * counter + "px)";
    }
    if (images[counter].id == "first-clone") {
        carouselSlide.style.transition = 'none';
        counter = 1;
        carouselSlide.style.transform = "translateX(" + -scrollWidth * counter + "px)";
    }
});