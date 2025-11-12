// spred
let obj1 = {
    a: 1,
    b: 2
}
let obj2 = {
    ...obj1,
    c: 3
}
console.log(obj2);

// rest
function myFunc(param, ...rest) {
    console.log(param);
    console.log(rest);
}
myFunc(1,2,3,4,5);