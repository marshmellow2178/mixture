const canvas = document.querySelector("canvas");
const lineWidth = document.querySelector("#line-width");
const colorInput = document.querySelector("#color-input");
const colorOptions = document.querySelectorAll(".color-option");
const drawOption = document.querySelector("#draw-option");
const eraser = document.querySelector("#erase");
const textInput = document.querySelector("#text-input");
const fontSizeInput = document.querySelector("#font-size");
const fontWeightInput = document.querySelector("#font-weight");
const fontFaceInput = document.querySelector("#font-face");
const fontStyleBtn = document.querySelector("#font-style");
const resetBtn = document.querySelector("#reset");
const bgColorBtn = document.querySelector("#bg-color");
const fileInput = document.querySelector("#file-input");
const saveBtn = document.querySelector("#save");
const reloadBtn = document.querySelector("#reload");
const lineWidthMsg = document.querySelector("#line-width-msg");
const fontSizeMsg = document.querySelector("#font-size-msg");
const fontWeightMsg = document.querySelector("#font-weight-msg");

const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 600;
const INIT_COLOR = "#000000";
const INIT_LINE_WIDTH = 5;
const INIT_LINE = true;
const INIT_FONTSIZE = 24;
const INIT_FONTSTYLE = "normal";
const INIT_FONTWEIGHT = 400;
const INIT_FONTFACE = "serif";

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
const ctx = canvas.getContext("2d");
ctx.lineWidth = INIT_LINE_WIDTH;
const tempImg = document.createElement("img");

let isPainting = false;
let isLine = true;
let fontSize = INIT_FONTSIZE;
let fontStyle = INIT_FONTSTYLE;
let fontWeight = INIT_FONTWEIGHT;
let fontFace = INIT_FONTFACE;
lineWidthMsg.innerText = INIT_LINE_WIDTH;
fontSizeMsg.innerText = INIT_FONTSIZE;
fontWeightMsg.innerText = INIT_FONTWEIGHT;

function ctrlPanelReset(){
    colorInput.value = INIT_COLOR;
    isLine = true;
    drawOption.innerText = "채우기 모드";
    lineWidth.value = INIT_LINE_WIDTH;
    fontSize = INIT_FONTSIZE;
    fontSizeInput.value = INIT_FONTSIZE;
    fontStyle = INIT_FONTSTYLE;
    fontStyleBtn.innerText = "기울이기";
    fontWeight = INIT_FONTWEIGHT;
    fontWeightInput.value = INIT_FONTWEIGHT;
    fontFace = INIT_FONTFACE;
    fontFaceInput.value = INIT_FONTFACE;
    reloadBtn.disabled = true;

    lineWidthMsg.innerText = INIT_LINE_WIDTH;
    fontSizeMsg.innerText = INIT_FONTSIZE;
    fontWeightMsg.innerText = INIT_FONTWEIGHT;
}

function onCanvasMove(event){
    ctx.lineTo(event.offsetX, event.offsetY);
    if(isPainting){
        if(isLine){
            ctx.stroke();
        }else{
            ctx.fill();
        }
        return; //fill > movetTo 로 에러 나는것 방지
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}
function onCanvasDown(event){
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
    isPainting = true;
}
function stopPainting(){
    isPainting = false;
}
function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
    lineWidthMsg.innerText = `${event.target.value}`;
}
function setCtxColor(color){
    colorInput.value = color;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
}
function onColorOptionClick(event){
    setCtxColor(event.target.dataset.color);
}
function onDrawOptionClick(){
    if(isLine){
        isLine = false;
        drawOption.innerText = "그리기 모드";
    }else{
        isLine = true;
        drawOption.innerText = "채우기 모드";
    }
}
function onEraserClick(){
    setCtxColor("#ffffff");
}
function onCanvasDoubleClick(event){
    const text = textInput.value;
    if(text !== ""){
        ctx.save();
        ctx.lineWidth = 1;
        ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFace}`;
        if(isLine){
            ctx.strokeText(text, event.offsetX, event.offsetY);
        }else{
            ctx.fillText(text, event.offsetX, event.offsetY);
        }
        ctx.restore();
    }
}
function onFontSizeChange(event){
    fontSize = event.target.value;
    fontSizeMsg.innerText = `${fontSize}`;
}
function onFontWeightChange(event){
    fontWeight = event.target.value;
    fontWeightMsg.innerText = `${fontWeight}`;
}
function onFontFaceChange(event){
    fontFace = event.target.value;
}
function onFontStyleClick(){
    if(fontStyle==="normal"){
        fontStyle = "italic";
        fontStyleBtn.innerText = "일반";
    }else{
        fontStyle = "normal";
        fontStyleBtn.innerText = "기울이기";
    }
}
function onResetClick(){
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    ctrlPanelReset();
}
function onBgColorClick(){
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function onImgUpload(event){
    const url = URL.createObjectURL(event.target.files[0]);
    tempImg.src = url;
    tempImg.onload = function(){
        canvas.width = tempImg.width;
        canvas.height = tempImg.height;
        ctx.drawImage(tempImg, 0, 0);
    }
    ctrlPanelReset();
    reloadBtn.disabled = false;
}
function onSaveClick(){
    const myImage = canvas.toDataURL("image/png");
    const tempLink = document.createElement("a");
    tempLink.href = myImage;
    tempLink.download = "myImage.png";
    tempLink.click();
}
function onResetClick(){
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    ctrlPanelReset();
}
function onReloadClick(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(tempImg, 0, 0);
}
canvas.addEventListener("mousemove", onCanvasMove);
canvas.addEventListener("mousedown", onCanvasDown);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
canvas.addEventListener("dblclick", onCanvasDoubleClick);

lineWidth.addEventListener("change", onLineWidthChange);
colorOptions.forEach(item=>item.addEventListener("click", onColorOptionClick));
drawOption.addEventListener("click", onDrawOptionClick);
eraser.addEventListener("click", onEraserClick);

fontSizeInput.addEventListener("change", onFontSizeChange);
fontWeightInput.addEventListener("change", onFontWeightChange);
fontFaceInput.addEventListener("change", onFontFaceChange);
fontStyleBtn.addEventListener("click", onFontStyleClick);

resetBtn.addEventListener("click", onResetClick);
bgColorBtn.addEventListener("click", onBgColorClick);
fileInput.addEventListener("change", onImgUpload);
saveBtn.addEventListener("click", onSaveClick);
reloadBtn.addEventListener("click", onReloadClick);