// 그냥 속성 이름으로 함수에 전달
function func1({name, age, location}) {
    console.log(name, age, location);
}

function func2({name, age, location, habby}) {
    console.log(name, age, location, habby);
}

function func3({name: n, age: a, location: l}) {
    // 근데 생각해보니 이렇게 안하고 객체를 인수로 받아서 할 거  같은데...
    console.log(n, a, l);
}

function func4({name: n1, age: a1, location: l1}, {name: n2, age: a2, location: l2}) {
    // 근데 생각해보니 이렇게 안하고 객체를 인수로 받아서 할 거  같은데...
    console.log(n1, a1, l1, n2, a2, l2);
}

let person = {
    name: "wolf",
    location: "수원",
    age: 56
}

func1(person);
func2(person);
func3(person);
func4(person, person);