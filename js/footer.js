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
footer_home.href = "/index.html";
footer_home.innerText = "▢";
footer_home.id = "footer-home";

const footer_back = document.createElement("button");
footer_back.id = "footer-back";
footer_back.innerText = "<";
footer_back.addEventListener("click", onBackClick);

footer.appendChild(footer_menu);
footer.appendChild(footer_home);
footer.appendChild(footer_back);