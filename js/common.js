let url_name = window.location.origin;
if(!url_name.includes("127.0.0.1")){
    url_name += "/mixture";
}
const GLOBAL = {
    HIDDEN_CLASSNAME:"hidden",
    API_KEY:"8d9cfeead1a068cf9a9602f49f6d681c",
    USERNAME:"userData",
    IMG_SRC:url_name + "/img/",
    URL_HREF: url_name,
};

const bgList= [
    "1.jpg", "2.jpg"
];
const todaysImage = bgList[Math.floor(Math.random()*bgList.length)];

const bgImg = document.createElement("img");
bgImg.src = `${GLOBAL.IMG_SRC}backgrounds/${todaysImage}`;
//서버 업로드시 이미지 경로지정
bgImg.id = "bg-img";
document.body.appendChild(bgImg); 

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

const footer = document.querySelector("footer");

const popup_menu = document.createElement("div");
popup_menu.id = "popup-menu";
document.body.appendChild(popup_menu);
popup_menu.innerText = "팝업 메뉴";
popup_menu.classList.add("hidden");

function onMenuOpen(){
    popup_menu.classList.toggle("hidden");
}

function onBackClick(){
    location.href = "../";
}

const footer_menu = document.createElement("button");
footer_menu.innerText = "|||";
footer_menu.id = "footer-menu";
footer_menu.addEventListener("click", onMenuOpen);

const footer_home = document.createElement("a");
footer_home.href = `${GLOBAL.URL_HREF}/index.html`;
footer_home.innerText = "▢";
footer_home.id = "footer-home";

const footer_back = document.createElement("button");
footer_back.id = "footer-back";
footer_back.innerText = "<";
footer_back.addEventListener("click", onBackClick);

footer.appendChild(footer_menu);
footer.appendChild(footer_home);
footer.appendChild(footer_back);