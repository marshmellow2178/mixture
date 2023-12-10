const faqList = document.querySelectorAll("li");
const faqTitle = document.querySelectorAll("li hgroup");
const faqBtn = document.querySelectorAll("li button");

faqTitle.forEach((item, idx)=>{
    item.addEventListener("click", handleListClick);
    item.id = idx;
});

faqBtn.forEach((item)=>{
    item.addEventListener("focus", handleFocus);
});

function handleListClick(event){
    //console.dir(event.currentTarget); //li
    const title = event.currentTarget;
    for(let i = 0;i<faqTitle.length;i++){
        if(title.id != i){
            faqTitle[i].children[0].classList.remove("active");
            faqTitle[i].children[1].classList.remove("active");
            faqTitle[i].nextElementSibling.classList.remove("active");
        }
    }
    title.children[1].classList.toggle("active");
    title.nextElementSibling.classList.toggle("active");
    //console.log(document.activeElement);
}

function handleFocus(event){
    // console.dir(event.target);
    faqBtn.forEach((b)=>{
        b.previousElementSibling.classList.remove("active");
    });
    event.target.previousElementSibling.classList.add("active");
}