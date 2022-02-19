let numbers = document.getElementsByClassName('number');

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click',function(){
        // console.log(this.id)
        let output = document.getElementById('output-value').innerText;
        document.getElementById('output-value').innerText = output + this.id;
    })
    
}
let operators = document.getElementsByClassName('operator');
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click',function(){
        if(this.id == 'clear'){
            document.getElementById('output-value').innerText = '';
            document.getElementById('history-value').innerText = '';

        }else if(this.id == 'backspace'){
            let out = document.getElementById('output-value').innerText;

            let result = out.substr(0,out.length - 1);
            document.getElementById('output-value').innerText = result;
        }else{
            if(this.id=='='){
                let outp = document.getElementById('output-value').innerText;
                let history = document.getElementById('history-value').innerText;
                let result = eval(history+outp);
                document.getElementById('output-value').innerText=result;
                document.getElementById('history-value').innerText= history+outp;
            }else{
            let outp = document.getElementById('output-value').innerText;
            document.getElementById('history-value').innerText = outp + this.id;
            document.getElementById('output-value').innerText='';
            }
        }
    })
    
}