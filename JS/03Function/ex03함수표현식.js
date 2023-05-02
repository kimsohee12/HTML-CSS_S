//함수 표현식 : 익명 함수 형태로 함수 선언 -> 변수 참조 
//function() -> 익명함수 (함수 이름 x)

// 익명함수를 만들때 
// let 으로 만들어도 상관은 x const(상수)로 만드는게 기본적

const intro = function () {
    console.log('안녕하세요 저는 김소희 입니다. 😀');
}

//함수 호출
intro();

//매개변수 있는 함수 
const lunch = function(menu) {
    console.log(`점심으로는 ${menu}먹었습니다.😋`);
}
// 함수 호출
lunch('토마토 스파게티 ');

//매개변수+ return 문
const dinner = function(menu) {
    
    return `저녁으로는 ${menu} 먹을거에요!`
}
//함수호출
console.log( dinner('초밥'));