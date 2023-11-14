const calendar_today = new Date();
const calendar = document.querySelector("#calendar");
const calendar_date = document.querySelector("#calendar_date");
const calendar_title = document.querySelector("#calendar_title span");

function printcalendar(year, month_idx) {
    calendar_date.replaceChildren();
    const sdate = new Date(year, month_idx, 1);
    const edate = new Date(sdate);
    /* 객체를 = 으로 대입하면 주소복사됨 주의 */
    edate.setMonth(edate.getMonth() + 1);
    edate.setDate(edate.getDate() - 1);

    const sweekday = sdate.getDay(); /*1-7 일-토 - 1*/
    calendar_title.innerText = `${year} / ${month_idx+1}`;

    for (let i = 1; i <= 42; i++) {
        const li = document.createElement("li");
        if(sweekday < i && i <= sweekday + edate.getDate()){
            li.innerText = `${i - sweekday}`;
        }
        if(year == calendar_today.getFullYear() 
        && month_idx == calendar_today.getMonth()
        && (i-sweekday) == calendar_today.getDate()){
            li.id = "today";
        }
        calendar_date.appendChild(li);
    }
}

const calendar_prev = document.querySelector("#prev");
const calendar_next = document.querySelector("#next");

function setNewDate(){
    const temp = calendar_title.innerText;
    const year = parseInt(temp.substring(0, 4));
    const month = parseInt(temp.substring(7, 9));
    return new Date(year, month - 1, 1);
}

function prevmonth() {
    const new_date = setNewDate();
    new_date.setMonth(new_date.getMonth() - 1);
    printcalendar(new_date.getFullYear(), new_date.getMonth());
}

function nextmonth() {
    const new_date = setNewDate();
    new_date.setMonth(new_date.getMonth() + 1);
    printcalendar(new_date.getFullYear(), new_date.getMonth());
}

calendar_prev.addEventListener("click", prevmonth);
calendar_next.addEventListener("click", nextmonth);

printcalendar(calendar_today.getFullYear(), calendar_today.getMonth());
