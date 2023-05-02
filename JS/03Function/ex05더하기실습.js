
let num1 = Number(prompt('첫번째 정수 입력'));
let num2 = Number(prompt('두번째 정수 입력'));

//함수 선언문
function addNumber1() {
    return num1+num2;
}
//함수 표현식
const addNumber2 = function() {
        return num1+num2;
}
//함수 화살표
const addNumber3 = () => {
    return num1+num2;
}

//출력후 결과 확인
console.log('함수 선언문',addNumber1());
console.log('함수 표현식',addNumber2());
console.log('함수 화살표',addNumber3());