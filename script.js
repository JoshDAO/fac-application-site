const carouselSlide = document.querySelector(".my-slides");
const images = document.querySelectorAll(".my-slides img");
console.log(images);

// counter
let counter = 1;
const scrollWidth = images[0].clientWidth;
