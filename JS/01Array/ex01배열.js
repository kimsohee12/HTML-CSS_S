//배열 :  여러 변수를 하나의 묶음으로 다르는 구조
//1. 배열의 선언
let numList =[];
let numList2 = new Array(5);
console.log(numList2);

// 5개로 선언했어도 초과 가능 -> 공간을 동적, 가변적 관리
// 2. 배열의 생성
let numLise3 = new Array(1,2,3,4,5);
console.log(numLise3);

numList = [1,2,3];
console.log(numList);

numList2 = [1,2,3,4,5,6,7];
console.log(numList2);

//3. 배열의 선언 및 생성
// let numList4 = [];
// numList4 = [1,2,3,4,5]
let numList4 = [1,2,3,4,5];

//4. 인덱스를 활용해서 데이터를 저장
let arrayList = [];
arrayList[0] = 1;
arrayList[1] = '김소희';
arrayList[2] = true;
console.log(arrayList);
console.log(arrayList.length);

