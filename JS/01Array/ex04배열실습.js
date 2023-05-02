//1.주어진 데이터를 담은 배열 생성
let numList = [1,2,3,4,5,6,7,8];
//2. 데이터에서 홀수인 숫자를 찾고 개수를 세준다
let num =[];
// for (let i = 0; i< numList.length; i++){
//     if( numList[i]%2!=0){
//         num[num.length] = numList[i];
//     }
// }
for(let i of numList){
    if(i%2!=1){
        num[num.length] = numList[i];
    }
}
//3. 결과를 팝업창으로 출력해준다
alert(`list에 들어있는 홀수는 ${num}이며, 총 ${num.length}개 입니다.` )