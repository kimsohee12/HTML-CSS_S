// 변수 :  데이터를 담을 공간
let num =3;
//let -> 변수 선언 키워드
//num -> 변수 이름
// 자바에서 변수 만들때 자료형은 var로 씀 (int, String...x)
//let변수 , const상수
// ex) 

//var a = 1; // 재선언 가능, 재할당 가능
//var a = 2;
var var1 = 1;
//  재선언 :  같은 변수 이름으로 다시 변수 선언
console.log('ver 최초선언',var1);
var var1 = 2;
console.log('ver 다시선언',var1);
var1=3; // 재할당 
console.log('ver 다시할당',var1);


//let a = 1;// 재선언은 불가능 , 재할당은 가능 
//a = 2;
let let1 = 4;
console.log('let 최초선언',let1);
let1 = 5;
console.log('let 다시할당',let1);

// const a = 1; // 재선언 불가능, 재할당 불가능 (상수)
const con = 6;
console.log ('const 최초선언',con);
