/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.querySelector('.carousel-container');
const carouselImages = ["./assets/carousel/mountains.jpeg","./assets/carousel/computer.jpeg","./assets/carousel/trees.jpeg","./assets/carousel/turntable.jpeg"];

let currentIndex = 0;



function CarouselMaker() {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel')

  //Left-button
  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = '<';
  leftButton.addEventListener('click',(e) => {
    currentIndex --;
    if(currentIndex < 0) {
      currentIndex = 3;
    }
    console.log(currentIndex);
  })
  carousel.appendChild(leftButton);
  //Left-button
 //IMG
  const image = document.createElement('img');
  image.src = carouselImages[currentIndex];
  carousel.appendChild(image);
  //IMG

  //RIGHT-BUTTON
  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = '>';
  rightButton.addEventListener('click',(e) => {
    currentIndex ++;
    if(currentIndex > 3) {
      currentIndex = 0;
    }
    image.src = carouselImages[currentIndex];
    console.log(currentIndex);
  })
  carousel.appendChild(rightButton);
  //RIGHT-BUTTON

  
  
  console.log(carousel);
  return carousel;


  
}

carouselContainer.appendChild(CarouselMaker());