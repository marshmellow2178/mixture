const idForm = document.querySelector("#id-change");
const idInput = idForm.querySelector("input:first-child");

const username = JSON.parse(localStorage.getItem("userData"));

idInput.value = username.uid;

function onIdChange(event){
    event.preventDefault();
    const newId = idInput.value;
    username.uid = newId;
    localStorage.setItem("userData", JSON.stringify(username));
    sessionStorage.setItem("userData", JSON.stringify(username));
}
idForm.addEventListener("submit", onIdChange);