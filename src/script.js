const delay = 12000;

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * -100;

let current = 0;

let autoChange = setInterval(changeSlide, delay);

updateValueFromLocalStorage();

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

const change_name = document.querySelector('.change-name')
const change_movie = document.querySelector('.change-movie')
const change_series = document.querySelector('.change-series')
const change_pass_time = document.querySelector('.change-pass_time')

change_name.addEventListener("click",function(){
    const name = document.querySelector('.name')
    const name_input = document.querySelector('#name-input')
    if(name_input.value&&name_input.value!=""){
        name.innerText=name_input.value;
        addValueToLocalStorage("name",name_input.value)
    }
    name_input.value=""
})

change_movie.addEventListener("click",function(){
    const movie = document.querySelector('.movie')
    const movie_input = document.querySelector('#movie-input')
    if(movie_input.value&&movie_input.value!=""){
        movie.innerText=movie_input.value;
        addValueToLocalStorage("movie",movie_input.value)
    }
    movie_input.value=""
})

change_series.addEventListener("click",function(){
    const series = document.querySelector('.series')
    const series_input = document.querySelector('#series-input')
    if(series_input.value&&series_input.value!=""){
        series.innerText=series_input.value;
        addValueToLocalStorage("series",series_input.value)
    }
    series_input.value=""
})

change_pass_time.addEventListener("click",function(){
    const pass_time = document.querySelector('.pass_time')
    const pass_time_input = document.querySelector('#pass_time-input')
    if(pass_time_input.value&&pass_time_input.value!=""){
        pass_time.innerText=pass_time_input.value;
        addValueToLocalStorage("pass_time",pass_time_input.value)
    }
    pass_time_input.value=""
})

function addValueToLocalStorage(key,value){
    window.localStorage.setItem(key,value);
}

function getValueFromLocalStorage(key){
    return window.localStorage.getItem(key)
}

function updateValueFromLocalStorage(){
    let name_value = getValueFromLocalStorage("name")
    let movie_value = getValueFromLocalStorage("movie")
    let series_value = getValueFromLocalStorage("series")
    let pass_time_value = getValueFromLocalStorage("pass_time")
    if(name_value&&name_value!="")
        document.querySelector(".name").innerHTML=name_value
    if(movie_value&&movie_value!="")
        document.querySelector(".movie").innerHTML=movie_value
    if(series_value&&series_value!="")
        document.querySelector(".series").innerHTML=series_value
    if(pass_time_value&&pass_time_value!="")
        document.querySelector(".pass_time").innerHTML=pass_time_value
}