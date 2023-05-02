//1. 원하는 색상을 입력하세요 라는 입력창 만들기
//2. 빨강 -> red / 초록 ->green /파랑 ->blue 
// 그 외에는 잘못입력 하셨습니다 알림 팝업창
let color = prompt('색상을 입력해주세요.');

// if(color==="빨강"){
//    document.getElementById('color').style.background = 'red'
// }else if(color=="초록"){
//     document.getElementById('color').style.background = 'green'
// }else if(color=="파랑"){
//     document.getElementById('color').style.background = 'blue'
// }else{
//    alert ('잘못입력 하셨습니다.');
// }
switch (color) {
    case '빨강': result = 'red';
        break;
    case '초록': result = 'green';
        break;
    case '파랑': result = 'blue';
        break;
    default: alert ('잘못입력 하셨습니다.');
        break;
document.getElementById('color').style.background = 'blue'
}
document.getElementById('color').style.background = result;