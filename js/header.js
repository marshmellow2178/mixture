const header = document.querySelector("header");

const div_left = document.createElement("div");
const logo = document.createElement("span");
logo.id = "header-logo";
logo.innerText = " ? ";

const header_clock = document.createElement("span");
header_clock.id = "header-clock";

function getHeaderClock(){
    const date = new Date();
    //new Date() = LocalDateTime.now()
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    header_clock.innerText = `${hours}:${minutes}`;
}
 
div_left.appendChild(logo);
div_left.appendChild(header_clock);

const div_right = document.createElement("div");
const wifi = document.createElement("span");
const wifiImg = document.createElement("img");

if(navigator.onLine==true){
    wifiImg.src = `${GLOBAL.IMG_SRC}icons/wifi.svg`;
}else{
    wifiImg.src = `${GLOBAL.IMG_SRC}icons/wifi-off.svg`;
}
wifi.appendChild(wifiImg);
div_right.appendChild(wifi);

header.appendChild(div_left);
header.appendChild(div_right);

getHeaderClock();     //as site loads
setInterval(getHeaderClock, 60*1000);   