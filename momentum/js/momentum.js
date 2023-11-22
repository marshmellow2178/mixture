const greetings = document.querySelector("#greetings");
const savedUsername = localStorage.getItem("username");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

/*
1st argument in eventListener
 = information autofilled about event just occured
 = usually named as "event"
 = diffrent from event to event
preventDefault = stops the def behavior of the browser
*/
const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    //new Date() = LocalDateTime.now()
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();     //as site loads
setInterval(getClock, 1000);    //every 5s

function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${GLOBAL.API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}°C`;
    });
    //fetch = wait for server response
}
function onGeoError(){
    alert("Cant find you, no info");
}
//get user's location
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function writeGreetings(){
    greetings.classList.remove("hidden");
    greetings.innerText = `Hello ${savedUsername}`; //variables + string
}
function onLoginSubmit(event){
    event.preventDefault();
    const uid = loginInput.value;
    localStorage.setItem("username", uid);
    loginForm.classList.add("hidden");
    writeGreetings();
} 
loginForm.addEventListener("submit", onLoginSubmit);

if(savedUsername !== null){
    writeGreetings();
}else{
    loginForm.classList.remove("hidden");
}

const bgList= [
    "1.jpg", "2.jpg"
];
const todaysImage = bgList[Math.floor(Math.random()*bgList.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${todaysImage}`;
//서버 업로드시 이미지 경로지정
bgImg.id = "bg-img";
document.body.appendChild(bgImg); 