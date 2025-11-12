let arr1 = [1,2,3,4,5,6,7,8,9];

// 심지어 순서도 맞춰준다...
for (let item of arr1) {
    console.log(item);
}

// 또는 배열도 객체니까..
for (let item of Object.keys(arr1)) {
    console.log("key: " + item + ", value: " + arr1[item]);
}

// 그럼 함수는?
function myFunc(a, b) {
    console.log(a + b);
}
for (let item of Object.keys(myFunc)) {
    console.log("key: " + item + ", value: " + myFunc[item]);
}
// key가 아무것도 없다...