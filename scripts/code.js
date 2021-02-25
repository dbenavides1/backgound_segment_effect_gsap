// initial Squares Effect
var tl = gsap.timeline();

tl.addLabel("squares_and_shadows").to(".square1", {
    delay: 0.5,
    duration: 1.3,
    scale: 1.13,
}, "squares_and_shadows").to(".square2", {
    delay: 0.5,
    duration: 1.3,
    scale: 1.08,
}, "squares_and_shadows").to(".square-shadow1", {
    delay: 0.5,
    duration: 1.3,
    scale: 1.13,
    boxShadow: "0px 0px 20px rgba(0,0,0,0.7)"
}, "squares_and_shadows").to(".square-shadow2", {
    delay: 0.5,
    duration: 1.3,
    scale: 1.08,
    boxShadow: "0px 0px 30px rgba(0,0,0,0.7)"
}, "squares_and_shadows");

// ONMOUSEMOVE
const slide1 = document.querySelector(".slide1");
var slideWidht = slide1.offsetWidth,
    slideHeight = slide1.offsetHeight;

function moveSquares(e) {
    var xPos = e.clientX - (slideWidht/2);
    var yPos = e.clientY - (slideHeight/2);
    console.log(xPos + " " + yPos);
    gsap.to(".square1", {
        x: xPos * 0.01,
        y: yPos * 0.01,
        ease: Power1.easeOut
    });
    gsap.to(".square-shadow1", {
        x: xPos * 0.01,
        y: yPos * 0.01,
        ease: Power1.easeOut
    });
    gsap.to(".square2", {
        x: xPos * 0.02,
        y: yPos * 0.02,
        ease: Power1.easeOut
    });
    gsap.to(".square-shadow2", {
        x: xPos * 0.02,
        y: yPos * 0.02,
        ease: Power1.easeOut
    })
}

function resetSquares(event) {
    event.stopPropagation();
    gsap.to(".square", {
        x: 0, 
        y: 0,
        ease: Power1.easeOut
    });
    gsap.to(".square-shadow", {
        x: 0, 
        y: 0,
        ease: Power1.easeOut
    });
}

slide1.onmousemove = (event) => {moveSquares(event)};
slide1.onmouseleave = (event) => {resetSquares(event)};