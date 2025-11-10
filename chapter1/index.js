console.log("Hello World!");

let age = 25;
console.log(age);

// 놀랍게도 재선언은 잡아낸다..아래는 오류
// let age;
let age1;
age1 = 25;
console.log(age1);

/*
여러줄 주석은 이렇게
*/

const user_name = "이응경";
const $ = "이런 것도 변수 이름이 되네...";

console.log(user_name);
console.log($);

/*
이런 건 의외로 안된다..
let my-name = "이응경";
console.log(my-name);
*/

function parenFunc(callBack) {
    console.log("parent")
    callBack();
}

function childFunc() {
    console.log('chlid');    
}

parenFunc(childFunc);
