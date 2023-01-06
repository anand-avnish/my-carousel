//Carousel
let name_bg = "#222831"
let movie_bg="#00ADB5"
let series_bg="#393E46"
let pass_time_bg ="#EEEEEE"

if(window.localStorage.getItem("name-color")==null)
    addValueToLocalStorage("name-color",name_bg)
if(window.localStorage.getItem("movie-color")==null)
    addValueToLocalStorage("movie-color",movie_bg)
if(window.localStorage.getItem("series-color")==null)
    addValueToLocalStorage("series-color",series_bg)
if(window.localStorage.getItem("pass-time-color")==null)
    addValueToLocalStorage("pass_time-color",pass_time_bg)
const series_color_input=document.getElementById("series-color-input")
const name_color_input=document.getElementById("name-color-input")
const movies_color_input=document.getElementById("movie-color-input")
const pass_time_color_input=document.getElementById("pass-time-color-input")

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

//Slide text input and update

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

    name_bg= getValueFromLocalStorage("name-color")
    movie_bg= getValueFromLocalStorage("movie-color")
    series_bg= getValueFromLocalStorage("series-color")
    pass_time_bg= getValueFromLocalStorage("pass_time-color")
    document.querySelector('.slide-name').style.backgroundColor=name_bg
    document.querySelector('.slide-movie').style.backgroundColor=movie_bg
    document.querySelector('.slide-series').style.backgroundColor=series_bg
    document.querySelector('.slide-pass-time').style.backgroundColor=pass_time_bg
    name_color_input.value=name_bg
    movies_color_input.value=movie_bg
    series_color_input.value=series_bg
    pass_time_color_input.value=pass_time_bg
}

//Color picker

name_color_input.addEventListener("change", function(){
    // console.log(name_color_input.value);
    const new_color=name_color_input.value
    document.querySelector('.slide-name').style.backgroundColor=new_color
    name_bg=new_color;
    addValueToLocalStorage("name-color",name_bg)
})

movies_color_input.addEventListener("change", function(){
    // console.log(name_color_input.value);
    const new_color=movies_color_input.value
    document.querySelector('.slide-movie').style.backgroundColor=new_color
    movie_bg=new_color;
    addValueToLocalStorage("movie-color",movie_bg)
})

series_color_input.addEventListener("change", function(){
    // console.log(name_color_input.value);
    const new_color=series_color_input.value
    document.querySelector('.slide-series').style.backgroundColor=new_color
    series_bg=new_color;
    addValueToLocalStorage("series-color",series_bg)
})

pass_time_color_input.addEventListener("change", function(){
    // console.log(name_color_input.value);
    const new_color=pass_time_color_input.value
    document.querySelector('.slide-pass-time').style.backgroundColor=new_color
    pass_time_bg=new_color;
    addValueToLocalStorage("pass-time-color",pass_time_bg)
})