
// 1, 이모티콘, 행의 개수 입력받기
let emoji = prompt('이모티콘을 입력해주세요');
let num = Number(prompt('출력할 행의 개수를 입력하세요'));

//2. 이모티콘의 행의 개수에 맞춰 
//피라미드 형태로 출력하는 함수 만들기
// 함수에 매개변수로 이모티콘이랑 행 개수 받아오기
const pyramid = (emoji,num) => {
    for (let i=1; i<=num;i++){
        for(let j=1; j<=i; j++){
            document.write(emoji);
        }
        document.write('<br>');
    }
}

pyramid(emoji,num);