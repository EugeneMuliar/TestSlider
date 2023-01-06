"use strict";

function generateThumbnails(slidersSelector, elementSelector, thumbnailSelector) {

  let thumbnailElements = document.querySelectorAll(`.${slidersSelector} .${elementSelector}`);
  let thumbnailDiv = document.querySelectorAll(`.${thumbnailSelector}`)[0];

  thumbnailElements.forEach( (element, index) => {
    thumbnailDiv.innerHTML += element.innerHTML;
    thumbnailDiv.children[index].classList.add("img-thumb")
    console.log(thumbnailDiv.children[index]);
  })

}

generateThumbnails("main-slider", "logo-image", "thumbnails");

// Create slider
let slideIndex = 0;

function showSlide(number) {
  
	let slides = document.querySelectorAll(".slide");
	let thumbs = document.querySelectorAll(".img-thumb");
	
	if (number > [slides.length-1]) {slideIndex = 0}
	if (number < 0) {slideIndex = slides.length}

  slideIndex = number;
  
  if (number == (slides.length-1)) {
    document.querySelector('.slider-buttons .button-next')?.classList.add("disable");
  }
	else if (slideIndex == 0) {
    document.querySelector('.slider-buttons .button-previous')?.classList.add("disable");
  }
  else {
    document.querySelector('.slider-buttons .button-next')?.classList.remove("disable");
    document.querySelector('.slider-buttons .button-previous')?.classList.remove("disable");
  }
  
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
    if (i != slideIndex) {slides[i].classList.add("hide")}
    else {slides[i].classList.remove("hide")}
	}
	
	for (let i = 0; i < thumbs.length; i++) {
		thumbs[i].classList.remove("current");
	}
  
	slides[slideIndex].classList.add("active");
	thumbs[slideIndex].classList.add("current");
}

showSlide(slideIndex);

// Add listner for click on thumbnails.
let thumbnails = document.querySelectorAll(".img-thumb");

thumbnails.forEach( (element, index) => {
  element.addEventListener("click", (e) => {
    showSlide(index);
  });
})

function nextSlide() {
	showSlide(slideIndex += 1);
}

function previousSlide() {
	showSlide(slideIndex -= 1);
}

// Click on next slide button.
let nextSlideButton = document.querySelector('.slider-buttons .button-next');
nextSlideButton.addEventListener("click", (e) => {
  nextSlide();
})

// Click on previous slide button.
let previousSlideButton = document.querySelector('.slider-buttons .button-previous');
previousSlideButton.addEventListener("click", (e) => {
  previousSlide();
})