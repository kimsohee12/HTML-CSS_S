//객체 :  여러 데이터를 하나의 변수에 저장할 수 있는 데이터 타입
// 구조 -> {key1 : value1,  key2 : value2 } -> 하나 이상을 넣을때 , 붙어주면 됨
// key => 객체의 속성(property)
// key 값을 넣을때 " " 를 붙여도 되고 안붙여도 사용 가능
// value => 속성의 값 / 기본자료형, 함수, 배열, 객체

// 객체 생성
let person = {
    "name" : "김소희",
    age : 20,
    isPerson : true,
    friday : ()=>{
        console.log("여러분 금요일이에요!💗");
    },
    favorite : {
        food : "pizza",
        drink : "coffee",
        color : "blue"
    },
    smhrd  : ['예진','영표','세영']
};
//객체 접근
console.log(person);
console.log("이름 : " ,person.name);
console.log("나이 : " ,person.age , "살");
console.log("사람 : " ,person.isPerson);
person.friday();
console.log("좋아하는 음료 ", person.favorite.drink);
console.log("담임선생님 ", person.smhrd[0]);

//속성값 변경 및 추가 
person.name = "장원영";
console.log('이름 변경',person.name);
person.height = 180;
console.log('키 추가 ', person.height);

person.weight = 5;
//weight 속성값 추가
console.log('몸무게 추가:' , person.weight,'Kg');