
//1. 사용자로부터 숫자 입력받는다 (세자리수)
//2. 입력 받은 수를 가지고 연산을 통해 결과값을 얻는다.
//3. 결과값을 형태에 맞춰 콘솔창으로 출력한다.
//let inputNum = Number (prompt('숫자를 입력해주세요.'));
//console.log(inputNum);


let inputNum1 = Number (prompt('숫자를 입력해주세요.'));
let inputNum2 = parseInt (inputNum1/100)*100;

let num = inputNum1-(inputNum1%100);
console.log(`백의 자리 이하 버린 결과 >> ${num}`);