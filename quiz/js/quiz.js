const quiz = [
    {
        idx:1,
        question:"삼국지에서 촉나라의 전략가였던 인물은?",
        answer:["제갈공명", "제갈량"],
    },
    {
        idx:2,
        question:"일본을 통일하고 임진왜란을 일으킨 인물은?",
        answer:["도요토미 히데요시"],
    },
    {
        idx:3,
        question:"낮에 이유없이 잠에 빠져드는 병은?",
        answer:["기면증"],
    },
    {
        idx:4,
        question:"인슐린이 부족하거나 기능하지 못해 혈중 포도당 농도가 높은 병은?",
        answer:["당뇨", "당뇨병"],
    },
    {
        idx:5,
        question:"영국이 유럽연합을 탈퇴한 사건을 뜻하는 말은?",
        answer:["브렉시트"],
    },
];

const examForm = document.querySelector("#exam");
const question = examForm.querySelector("p");
const answerInput = examForm.querySelector("input");
const result = document.querySelector("#quiz-result");
const nextBtn = document.querySelector("#quiz-result button");

let number = Math.floor(Math.random()*quiz.length);
question.innerText = quiz[number].question;

function reload(){
    location.reload();
}
function onAnswerInput(event){
    event.preventDefault();
    const myAnswer = answerInput.value;
    answerInput.disabled = true;
    result.classList.remove("hidden");
    const msg = result.querySelector("p");
    if(quiz[number].answer.includes(myAnswer)){
        msg.innerText = "정답입니다!";
    }else{
        msg.innerText = `오답입니다! (정답: ${quiz[number].answer})`;
    }
}

examForm.addEventListener("submit", onAnswerInput);
nextBtn.addEventListener("click", reload);
result.classList.add("hidden");