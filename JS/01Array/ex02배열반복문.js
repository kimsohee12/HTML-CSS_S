//배열에 저장된 데이터를 반복문으로 출력하기

//1. for문
let namList =['김소희','황정용','김혁','정다운','안영석']
for(let i=0; i<namList.length;i++){
    console.log(namList[i]);
}

//2. for of 문
let foodList = ['피자🍕','치킨🍗','아이스크림🍦','삼겹살🥩']
for (let i of foodList){
    console.log(i);
}

//3.forEach문
let colorList = new Array('노랑💛','파랑💙','보라💜');
colorList.forEach((element,index)=>{
    console.log(index,element);
})