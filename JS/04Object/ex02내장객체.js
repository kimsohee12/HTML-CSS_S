//내장객체 :  자바스크립트에서 제공하는 객체
//Array, Math, Date,...

let today = new Date();
//Date 객체 -> 1~12월 0~11로 가지고 있음 ex) 0->1월
let yesterday = new Date(2023,3,27,0,0,0);
console.log('오늘', today);
console.log('어제', yesterday);

//출력형태 -> 콘솔창
// OO년 O월 O일 O요일
//O시 O분 O초

//필요한 데이터 하나씩 가져오기
let tYear = today.getFullYear();//연도 정보
let tMonth = today.getMonth()+1; //월 정보 0~11
let tDate = today.getDate(); // 일 정보
let tDay = today.getDay(); //요일 정보 0~6(일~토)까지
let tHour = today.getHours(); //시 정보
let tMinute = today.getMinutes(); // 분 정보
let tSecond = today.getSeconds(); // 초 정보

//요일 정보 0~6-> 일~토
if(tDay==0){tDay='일'}
else if(tDay==1){tDay='월'}
else if(tDay==2){tDay='화'}
else if(tDay==3){tDay='수'}
else if(tDay==4){tDay='목'}
else if(tDay==5){tDay='금'}
else if(tDay==6){tDay='토'}

console.log(`${tYear}년 ${tMonth}월 ${tDate}일 ${tDay}요일`);
console.log(`${tHour}시 ${tMinute}분 ${tSecond}초`);