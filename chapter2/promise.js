// 이게 비동기 작업을 편하게 해준다는데...그냥 함수 쓰는 것과 뭐가 다르다는 건지...
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // 이렇게 둘 다 쓰면 위에 있는 것만 처리하고 끝
        reject("실패");
        resolve("성공");
    }, 500);
});

// 결국 resolve-then과 reject-catch 쌍으로 성공/실패 후 결과 처리를 할 수 있다는 것이 Promise 객체를 쓰는 이유인가?
// 성공하면 then으로 받는다..
promise.then((res) => {
    console.log(res);})
.catch((err) => {
    // 실패하면 catch로 받는다...
    console.log(err);
})