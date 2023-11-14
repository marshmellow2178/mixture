const bgList= [
    "1.jpg", "2.jpg"
];
const todaysImage = bgList[Math.floor(Math.random()*bgList.length)];

const bgImg = document.createElement("img");
bgImg.src = `${window.location.origin}/img/backgrounds/${todaysImage}`;
//서버 업로드시 이미지 경로지정
bgImg.id = "bg-img";
document.body.appendChild(bgImg); 
