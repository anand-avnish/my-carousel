const delay = 7000;

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * -100;

let current = 0;

let autoChange = setInterval(changeSlide, delay);

function changeSlide(next = true) {
    if (next) {
        if(current>maxLeft){
            current-=100
        }else{
            current=0;
        }
    } else {
        if(current<0){
            current+=100
        }else{
            current=maxLeft
        }
    }
    slides.style.left = current + "%";
}


const restart = function() {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide, delay);
};


document.querySelector(".next").addEventListener("click", function() {
    changeSlide();
    restart();
});

document.querySelector(".previous").addEventListener("click", function() {
    changeSlide(false);
    restart();
});
