// falsy truthy를 이용한 객체 검사
function getName(person) {
    // 객체가 null이든 undefined이건 첫 번째 검사에서 탈락
    // 이렇게 하면 일단 에러는 안나는데...그래도 결국 결과 받아서 null, undefined 다 봐야 하는거 아닌가?
    return person && person.name;
}

let person = {name: "wolf"};
let person1 = {age: 25};

let name1 = getName(undefined);
console.log(name1);
let name2 = getName(null);
console.log(name2);
let name3 = getName(person);
console.log(name3);
let name4 = getName(person1);
console.log(name4);
