console.log("oooooooooo");

let slider = document.querySelector ('.slider');
console.log(slider);
let btn = document.querySelector ('.btn');
console.log(btn);
console.log(btn);

btn.addEventListener('click',f1);

function f1() {
    console.log("f1");
slider.classList.toggle('slider__move');
}