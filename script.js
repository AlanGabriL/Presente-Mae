// script for galery
let time = 3500;
let currentImageIndex = 0;
let imagens = document.querySelectorAll(".main-galery img");
let maxImages = imagens.length;

function startImages() {
  // defines time and the function that is to work
  setInterval(() => nextImage(), time);
}
function nextImage() {
  //remove a class from the image
  imagens[currentImageIndex].classList.remove("selected");

  //add one more to the variable
  currentImageIndex++;

  //if the variable is greater than or equal to maxImages
  if (currentImageIndex >= maxImages) {
    currentImageIndex = 0;
  }
  //add the selected class to the image
  imagens[currentImageIndex].classList.add("selected");
}

//when it loads the page, it will execute the function startImages
window.addEventListener("load", startImages());
