//호이스팅 :  선언문이 코드의 선두로 
//           끌어올려진 것처럼 동작하는 현상
//JS 소스코드 처리 과정 : 평가-> 실핼
//평가 :  모든 선언문 (변수, 함수 등) 등록
//실행(런타임)
// 변수 호이스팅 
// var 키워드는 변수를 먼저 등록을함 
console.log(lunchmenu);
//undefined => 선언만 -> 할당은 안된 상태
var lunchmenu = '두부';
console.log(lunchmenu);
// console.log(dinnermenu);
// let dinnerMenu = '연어초밥';

//함수 호이스팅
hoisting('위')
function hoisting(val) {
    console.log(val, '함수 선언문');
}
hoisting('아래');

//함수표현식 으로 호이스팅

// 함수표현식에서는 호이스팅 현상 발생 x
// hoisting2('위');-> error
const hoisting2 = function (val) {
    console.log(val,'함수 표현식');
}
hoisting2('아래');