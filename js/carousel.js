var slideIndex = 1;

showSlides(slideIndex);


//setInterval(autoMove,3000);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function autoMove() {
  plusSlides(1);
}

function showSlides(n) {
  //getters
  var i;
  var slides = document.getElementsByClassName("mySlides");

  //loopers
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  //erasers
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
 
  //activators
  slides[slideIndex-1].style.display = "block";  

  //movers
}
