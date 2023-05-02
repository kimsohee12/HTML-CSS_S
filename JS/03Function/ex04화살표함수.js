//화살표 함수 :함수 표현식 형태, function키워드 대신 '=>'사용
//'=>' 소괄호랑 중괄호 사이에 넣어줘야함 
const intro = ()=> {
    console.log('안녕하세요 저는 김소희 입니다.😀');
}
intro();

//매개변수 있는 함수 
const lunch = (menu) => {
    console.log(`점심으로는 ${menu}먹었습니다.😋`);
}
// 함수 호출
lunch('토마토 스파게티 ');

//매개변수+ return 문

//매개변수가 하나일 경우에는 소괄호 생략 가능
//매개변수가 하나이고,실행문이 하나일 경우에는 
//소괄호,중괄호, return 키워드도 생략 가능
const dinner1 = menu => `저녁으로는 ${menu} 먹을거에요!`

const dinner2 = menu => {
    return `저녁으로는 ${menu} 먹을거에요!`
}
//함수호출
console.log( dinner1('초밥'));
console.log( dinner2('초밥'));
