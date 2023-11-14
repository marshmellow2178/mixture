const registerForm = document.querySelector("#register-form");
const uidInput = registerForm.querySelector("input:nth-child(2)");
const pwInput = registerForm.querySelector("input:nth-child(3)");
const startMenu = document.querySelector("#startmenu");
const registerBtn = registerForm.querySelector("input[type=submit");

const savedUserData = JSON.parse(localStorage.getItem(GLOBAL.USERNAME));
const loginInfo = JSON.parse(sessionStorage.getItem(GLOBAL.USERNAME)); 
/* 
    sessionStorage = expires when browser/tab closed
    localStorage = never expires auto
    both survives reload/link
    계정 로그인 -> sessionStorage
    계정 정보저장 -> localStorage
*/
function showStartMenu(){       //로그인 성공시 메인화면 보여주기
    registerForm.classList.add(GLOBAL.HIDDEN_CLASSNAME);
    startMenu.classList.remove(GLOBAL.HIDDEN_CLASSNAME);
}

function onRegisterSubmit(event){   
    event.preventDefault();
    const newUID = uidInput.value;
    const newPW = pwInput.value;
    
    const newUserData = {
        uid:newUID,
        pw:newPW,
    };

    uidInput.value = "";
    pwInput.value = "";

    if(savedUserData===null){
        localStorage.setItem(GLOBAL.USERNAME, newUserData);
        sessionStorage.setItem(GLOBAL.USERNAME, JSON.stringify(newUserData));
        showStartMenu();    
    }else if(newUID === savedUserData.uid && newPW === savedUserData.pw){
        sessionStorage.setItem(GLOBAL.USERNAME, JSON.stringify(newUserData));
        showStartMenu();
    }else{      //wrong account info--
        return;
    }
}
registerForm.addEventListener("submit", onRegisterSubmit);

if(savedUserData===null){       //로컬에 유저 정보 없음 > 등록
    registerBtn.value = "REGISTER";
}else if(loginInfo===null){     //로컬에 정보 존재 = 로그인
    registerBtn.value = "LOGIN";
}else{                          //세션에 정보 존재 = 로그인 되어있음
    showStartMenu();
}