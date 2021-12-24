////////////// Accordian //////////////////////////

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
           

//////// carousel ////////

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if(n > slides.length) {
    slideIndex = 1
    }
    if(n < 1) {
    slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeSlide", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activeSlide";
}


/////selectors///////////////////////////////////////
//////////////////////////////////////////////////

const menuBtn = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')



//menu button///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

let isOpen = false

menuBtn.addEventListener('click',() =>{

    if(!isOpen){
        nav.classList.add('menuActive')
        menuBtn.classList.add('open')
        document.body.style.overflow = 'hidden'
        isOpen = true
    }
    else{
        nav.classList.remove('menuActive')
        menuBtn.classList.remove('open')
        document.body.style.overflow = 'visible'
        isOpen = false
    }
})