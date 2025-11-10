// 배열은 아무거나 다 들어간다..
let arr1 = [
    1, "1", true, null, undefined, () => {console.log("Hello Array");}, [1, 2, 3], {a: 1}
];
console.log(arr1);

// 부를때는 인덱스로
console.log(arr1[2]);
arr1[5]();