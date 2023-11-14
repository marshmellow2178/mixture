const nav = document.querySelectorAll("nav p");
const forms = document.querySelectorAll("form");

const HIDDEN = "hidden";
const ACTIVE = "active";

function activate(id){
    nav[id].classList.add(ACTIVE);
    forms[id].classList.remove(HIDDEN);
}

function init(id){
    nav.forEach(item =>{
        item.classList.remove(ACTIVE);
    });
    forms.forEach(item =>{
        item.classList.add(HIDDEN);
    });
    activate(id);
}

function onTabClick(event){
    const id = event.target.id;
    init(parseInt(id));
}

for(let i = 0;i<nav.length;i++){
    nav[i].id = i;
}
nav.forEach(item =>{
    item.addEventListener("click", onTabClick);
});
init(0);