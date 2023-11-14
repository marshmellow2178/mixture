//전역 변수 전용
let url_name = window.location.origin;
if(!url_name.includes("127.0.0.1")){
    url_name += "/mixture";
}
const GLOBAL = {
    HIDDEN_CLASSNAME:"hidden",
    API_KEY:"8d9cfeead1a068cf9a9602f49f6d681c",
    USERNAME:"userData",
    IMG_SRC:url_name + "/img/",
};
console.log(GLOBAL.IMG_SRC);