if (true) {
    var a = 1;
}
// 이건 var로 만들어서 함수 안이 아니라면 다 전역
console.log(a);

function foo() {
    // 이건 함수 안이라 var도 못나간다...
    var b = 2;
}
// 헷갈려서 되도록 사용하지 않는다...그럼 왜 만들었냐?
console.log(b);