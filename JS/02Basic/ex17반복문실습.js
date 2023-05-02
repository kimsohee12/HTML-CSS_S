// 랜덤한 수 하나 뽑아주기
// Math.random () :  0~1사이의 난수 생성

let ranNum =parseInt (Math.random()*100+1); //parseInt 정수만출력
console.log(ranNum);
let inputNum ;
// 사용자로부터 숫자를 입력 받기
while(true){
    inputNum = prompt('숫자를 입력해주세요.');
    if(inputNum>ranNum){
        alert('입력한 숫자보다 작은 수 입니다.')
    }else if(inputNum<ranNum){
        alert('입력한 숫자보다 큰 수 입니다.')
    }else if(inputNum==ranNum){
        alert('정답입니다. 축하합니다!(❁´◡`❁)👏')
        break;
    }


}   
// 입력>랜덤 => '입력한 숫자보다 작은 수 입니다.'
// 입력<랜덤 => '입력한 숫자보다 큰 수 입니다.'
// 입력 = 랜덤 => '정답입니다. 축하합니다!👍'
// 알림팝업창의 형태로 출력 ss