// value로 돌면? 중복은?
let person = {
    name: "wolf",
    birth_area: "서울",
    cur_area: "서울"
}

const valArr = Object.values(person);
console.log(valArr);
// 중복되도 다 나온다...순서도 맞추는 듯...

// 키는 in과 맞춰서 더 간단하게..
for (let key in person) {
    console.log("key: " + key + ", val: " + person[key]);
}