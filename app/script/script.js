const menu = document.querySelector(".nav__menu"),
   overlay = document.querySelector(".overla"),
   small = document.querySelector(".small"),
   body = document.body;

menu.addEventListener("click", menuToggle);

function menuToggle(){
    if(menu.classList.contains("open")){

        menu.classList.remove("open")
        small.classList.remove("visible");
        overlay.classList.remove("show");
        body.classList.remove("overflow-hidden");
    
    }
    else{
        menu.classList.add("open");
        small.classList.add("visible");
        overlay.classList.add("show");
        body.classList.add("overflow-hidden");

    }
}



// slider 
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

const backToTopButton = document.querySelector('#back-to-top-button');

backToTopButton.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});


// Get the word marquee element
const wordMarquee = document.querySelector('#word-marquee');

// Set the width of the word marquee to the width of the text
wordMarquee.style.width = wordMarquee.scrollWidth + 'px';



