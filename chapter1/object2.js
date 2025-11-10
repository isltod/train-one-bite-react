// 메서드를 만들 수 있다..익명 함수..
let person = {
    name: "wolf",
    sayHi: function() {
        console.log("Hello~~" + this.name);
    }
}

person.sayHi();

// 그런데 속성이나 메서드가 있는지는?
console.log("name" in person);
console.log("age" in person);
console.log("sayHi" in person);