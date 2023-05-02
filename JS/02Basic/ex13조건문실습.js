
//1. 사용자로부터 키와 몸무게 입력받는다
//2. 적정 몸무게 및 사용자 몸무게의 차이를 구한다
//3. 조건에 따라 결과 (초과/미달/정상)를 구한다.
//4. 결과 값들을 형태에 맞춰서 HTML문서내에 출력해준다.

let height = Number (prompt('키를 입력하세요'));
let weight = Number(prompt('몸무게를 입력하세요'));
let normal = (height-100)*0.9;
let gap = Math.abs(weight-normal);
console.log(height,weight,normal,gap);
let result ='';
//절대값 구하기 : Math.abs(data)
if(weight>normal){
    result ='초과한';
}else if(weight==normal){
    result ='정상';
}else{
    result ='미달인';
}
document.write(`
신장 : ${height}cm <br>
체중 : ${weight}kg <br>
적정체중 : ${normal}kg <br>
결과 : 적정체중은 ${normal}Kg이며, 현재 적정체중에서 ${gap}Kg ${result} 것을 알 수 있습니다.`);


