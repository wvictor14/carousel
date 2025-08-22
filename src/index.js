import "./styles.css";

import { initializeDropdowns } from "@victor2wy/basic-dropdown"
function initializeCarousel() {

  const carousel = document.querySelector(".carousel");
  if (!carousel) return;

  const carouselItems = carousel.querySelectorAll(".carousel-item");
  if (!carouselItems.length) return;

  carouselItems.forEach(item => {
    item.classList.remove('visible'); // just in case
    item.classList.add('hidden');
  })

}

// carousel();
// Temporary debugging - add this to your index.js
initializeDropdowns();


// initialize carousel items with the hidden class
// first element is shown at beginning
// put images into an array
// functions that cycle through --> next and previous
initializeCarousel();