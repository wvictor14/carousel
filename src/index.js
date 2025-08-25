import "./styles.css";

import { initializeDropdowns } from "@victor2wy/basic-dropdown"

// switch_image_interval milliseconds
function initializeCarousel(switch_image_interval = 5000) {

  const carousel = document.querySelector(".carousel");
  if (!carousel) return;

  const carouselItems = carousel.querySelectorAll(".carousel-item");
  if (!carouselItems.length) return;

  // make first element visible, and the rest are hidden
  for (let i = 0; i < carouselItems.length; i++) {
    if (i == 0) {
      carouselItems[i].classList.add('visible');
      carouselItems[i].classList.remove('hidden');
    } else {
      carouselItems[i].classList.remove('visible'); // just in case
      carouselItems[i].classList.add('hidden');
    }
  }

  // initiate the buttons
  const btnPrev = document.createElement('button');
  btnPrev.classList.add('carousel-btn');
  btnPrev.textContent = '<';
  const btnNext = document.createElement('button');
  btnNext.classList.add('carousel-btn');
  btnNext.textContent = '>';

  // define btn eventlistener 
  const handleClick = function (type = 'next') {

    // current image hidden;
    carouselItems[state].classList.remove('visible');
    carouselItems[state].classList.add('hidden');

    // state is the image index
    // if reached the end of the images, go back to first
    if (type == 'next') {
      if (carouselItems.length == state + 1) {
        state = 0;
      } else {
        state += 1;
      }
    }

    if (type == 'previous') {
      if (state - 1 == -1) {
        state = carouselItems.length - 1;
      } else {
        state -= 1;
      }
    }

    // new image visible
    carouselItems[state].classList.remove('hidden');
    carouselItems[state].classList.add('visible');

  }
  btnPrev.addEventListener("click", () => { handleClick('previous') });
  btnNext.addEventListener("click", () => { handleClick("next") });

  carousel.appendChild(btnNext);
  carousel.prepend(btnPrev);

  // carousel changes every 5 seconds
  const intervalId = setInterval(() => { handleClick("next") }, switch_image_interval);

  // add prev and next to arrow keys

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        handleClick('previous')
        break;
      case 'ArrowRight':
        handleClick("next")
        break;
      default:
        // Optional: Handle other keys or do nothing
        break;
    }
  });

  // add circles to bottom

  const circleDiv = document.createElement('div');
  circleDiv.classList.add('carousel-circles-container');

  const circles = [];

  for (let i = 0; i < carouselItems.length; i++) {
    circles[i] = document.createElement('div');
    circles[i].classList.add('carousel-circle');
    circleDiv.appendChild(circles[i]);
  }

  carousel.append(circleDiv);



}

let state = 0;

initializeDropdowns();
initializeCarousel();

