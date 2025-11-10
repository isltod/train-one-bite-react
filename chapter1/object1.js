let person = {
    name: "wolf",
    age: 25,
    age: 30,    // 이렇게 중복해도 에러는 안나고 뒤에거만 남는다...
    "like a cat": true  // 이렇게 띄어쓰기로도 만들 수는 있다..왜?
}

const personName = person.name;
const personAge = person["age"];    // 괄호 표기법이라는데, 결국 객체라기보다는 배열 같은거니까 당연...

console.log(personName);
console.log(personAge);

// 심지어는 속성이 추가된다..이게 무슨 객체라고...
person.gender = "male";
person["nickName"] = "foobar";

console.log(person.gender);
console.log(person.nickName);

// 추가가 된다는 건 삭제도 된다는 얘기...
delete person.nickName;
console.log(person);

// 상수 객체는 변경되나?
const constObj = {
    a: 1,
    b: "text"
}
constObj.a = 2;
console.log(constObj.a);
constObj.c = true;
delete constObj.b;
console.log(constObj);
