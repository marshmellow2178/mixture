const bgList= [
    "1.jpg", "2.jpg"
];
const todaysImage = bgList[Math.floor(Math.random()*bgList.length)];

const bgImg = document.createElement("img");
bgImg.src = `/img/backgrounds/${todaysImage}`;
bgImg.id = "bg-img";
document.body.appendChild(bgImg); 
