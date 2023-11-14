let formula = document.querySelector('.formula');
    let numbers = document.querySelectorAll('.numbers button');
    for(let i = 0;i<numbers.length;i++){
        numbers[i].addEventListener("click", function(){
            cal(numbers[i].innerHTML);
        });
    }
    
    function cal(value){
        let str = formula.innerHTML;
        if(str == '0'){
            str = '';
        }
        if(str == '' || str.endsWith(" ") || str.endsWith('.')){
            if(value=='.'){
                value ='0.';
            }else if(isNaN(value) || value == '00' || value == '0'){
                value = '';
            }
        }
        if(value=='.'){
            let sidx = (str=='')?0:str.lastIndexOf(' ');
            let lastinput = str.substring(sidx, str.length);
            if(lastinput.includes('.')){
                value = "";
            }
        }
        str = (str+value == '')? '0' : str+value;
        formula.innerHTML = str;
    }

    function esc(){
        let str = formula.innerHTML;
        if(str.length>1){
            formula.innerHTML = str.substring(0, str.length-1);
        }else{
            formula.innerHTML = 0;
        }
    }

    function clearAll(){
        formula.innerHTML = '0';
    }

    function compute(){
        let str = formula.innerHTML;
        let num = Number(eval(str));
        if(num == Math.floor(num)){
            formula.innerHTML = Math.floor(num);
        }else{
            formula.innerHTML = num.toFixed(2);
        }
    }