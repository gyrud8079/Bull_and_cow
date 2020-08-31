var by = document.body;

var number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
var numberArr = [];
for(var i = 0; i < 4; i++){
    var selectNumber = number.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    numberArr.push(selectNumber);
}

console.log(numberArr);

var result = document.createElement('h1');
by.append(result);

var fm = document.createElement('form');
document.body.append(fm);

var inputWindow = document.createElement('input');
fm.append(inputWindow);
inputWindow.type = 'text';
inputWindow.maxLength = 4;


var btn = document.createElement('button');
btn.textContent = '입력';
fm.append(btn);

var wrong =0;

fm.addEventListener('submit', function 비동기 (event) {
   event.preventDefault(); //새로고침방지
   var answer = inputWindow.value;
   
   if(answer === numberArr.join('')){
       result.textContent = 'Strike!';
       inputWindow.value='';
       inputWindow.focus();
       number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
       numberArr = [];
        for(var i = 0; i < 4; i++){
            var selectNumber = number.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            numberArr.push(selectNumber);
        }; 
        console.log(numberArr);
        wrong = 0;
   }else{//오답
        var correctArr = answer.split('');
        var strike = 0;
        var ball = 0;
        wrong++;
        if(wrong >10){ //10번 넘게 틀릴때
            result.textContent = `10번 넘게 틀려서 실패! 답은 ${numberArr.join(',')} 입니다.`;
            inputWindow.value='';
            inputWindow.focus();

            number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
            numberArr = [];
            for(var i = 0; i < 4; i++){
                var selectNumber = number.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
                numberArr.push(selectNumber)
            }; 
            console.log(numberArr);
            wrong = 0;

        }else{
            for(var i = 0; i < 3 ; i++){
                if(Number(correctArr[i]) === numberArr[i]){
                    console.log('같은자리');
                    strike++;
                }else if(numberArr.indexOf(Number(correctArr[i])) > -1){//같은 자리는 아니지만, 숫자가 겹치는지
                    console.log('겹치는숫자');
                    ball++;
                }

            }
            result.textContent = 'Strike : ' + strike+ 'Ball : ' + ball;
            inputWindow.value = '';
            inputWindow.focus();
        }
   }
});
