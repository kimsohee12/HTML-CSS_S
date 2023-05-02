//1. 주어진 데이터를 담은 배열을 생성
let numList = [23,54,78,13,44];

//2. 반복문을 활용해 최댓값을 찾아준다
let max=0;
for (let i = 0; i<numList.length; i++){
    if(max<numList[i]){
        max=numList[i];
    }
}
//3. 결과를 팝업창으로 출력한다
alert('최댓값 >> ' + max);