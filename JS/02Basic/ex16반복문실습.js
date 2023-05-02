// 사용자로 부터 시작 숫자와 마지막 숫자를 입혁한다.
//2. 시작~ 마지막 숫자까지의 합 구한다
//3. 결과값 콘솔창 출럭

let sum=0; 
let num1 = Number(prompt('시작할 숫자를 입력해주세요'));
console.log(num1);
let num2 = Number(prompt('마지막 숫자를 입력해주세요'));
console.log(num2);
for(let i= num1; i<=num2;i++){
    sum += i ;

}
document.write(`${num1} 부터 ${num2}의  합은 >> ${sum}`);


