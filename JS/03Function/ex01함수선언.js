//함수 : 특정 기능을 수행하는 소스 코드를 하나로 묶어서 
//       필요할 떄마다 사용하기 위한 구조

//함수 선언 : function 함수 이름 (){}
function intro(){
    console.log('안녕하세요. 저는 김소희입니다.( ❛ ᴗ ❛ )');
}
// 함수 호출
intro();

//매개변수 있는 함수 
function lunch(menu) {
    console.log(`점심으로는 ${menu}먹었습니다.😋`);
}
// 함수 호출
lunch('토마토 스파게티 ');

//매개변수+ return 문
function dinner(menu) {
    
    return `저녁으로는 ${menu} 먹을거에요!`
}
//함수호출
console.log( dinner('초밥'));