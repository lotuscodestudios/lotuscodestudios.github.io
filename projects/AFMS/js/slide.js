// var slidePosition = 1;
// SlideShow(slidePosition);

// // forward/Back controls
// function plusSlides(n) {
//   SlideShow(slidePosition += n);
// }

// //  images controls
// function currentSlide(n) {
//   SlideShow(slidePosition = n);
// }

// function SlideShow(n) {
//   var i;
//   var slides = document.getElementsByClassName("Containers");
// //console.log(typeof(slides));
// //console.log(`Types: ${slides.length}`)
//   var circles = document.getElementsByClassName("dots");
//   if (n > slides.length) {slidePosition = 1}
//   if (n < 1) {slidePosition = slides.length}


//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }

//   for (i = 0; i < circles.length; i++) {
//       circles[i].className = circles[i].className.replace(" enable", "");
//   }

//   slides[slidePosition-1].style.display = "block";
//   circles[slidePosition-1].className += " enable";
  
// } 


var slidePosition = 1;
SlideShow();

function SlideShow() {
  var i;

  var slides = document.getElementsByClassName("Containers");

  var circles = document.getElementsByClassName("dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }

  slidePosition++;

  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 3000); // Change image every 2 seconds


  if (slidePosition > circles.length) {slidePosition = 1}
  circles[i].className = circles[i].className.replace(" enable", "");
  setTimeout(SlideShow, 3000); // Change image every 2 seconds
} 