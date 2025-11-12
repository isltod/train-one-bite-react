const arr = [0,1,2,3,4];
const sliced = arr.slice(2, 5);
console.log(sliced);
console.log(arr);

function cb(item, idx) {
    console.log(`${idx}: ${item}`);
}
arr.forEach(cb);
// 또는 같게...
arr.forEach((item, idx) => {
    console.log(`${idx}: ${item}`);
});

// indexOf - 엄격하다지만 숫자끼리는 통한다...문자열과 숫자는 안되고..
console.log(arr.indexOf(3.0));

// includes, in? 마찬가진데?
console.log(2 in arr);
console.log(arr.includes(2));