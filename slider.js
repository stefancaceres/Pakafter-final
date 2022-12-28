let slider = document.querySelector(".slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnIzq = document.querySelector("#btn-izq");
const btnDer = document.querySelector("#btn-der");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next() {
    let sliderSectionFirst = document.querySelectorAll(".slider_section") [0];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout (function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginleft = "-100%";
    }, 500);
}

function back() {
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginleft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout (function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginleft = "-100%";
    }, 500);
}

btnDer.addEventListener('click', function(){
    next();
});

btnIzq.addEventListener('click', function(){
    back();
})

setInterval(function(){
    next();
},3000);