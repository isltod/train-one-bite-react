// 비동기 과정에서는 이런식으로 그냥 return 해서 받을 수 없다.
function double1(num) {
    let doubleNum = setTimeout(() => {
        const doubleNum = num * 2;
        return doubleNum;
    }, 1000);
    return doubleNum;
}

const res = double1(10);
console.log(res);

// 대신 비동기로 분기된 놈이 알아서 하게, 받아서 할 일도 다 넘겨줘야 한다...
function double2(num, cb) {
    setTimeout(() => {
        const doubleNum = num * 2;
        cb(doubleNum);
    }, 1000);
}

function clg(num) {
    console.log(num);
}

double2(10, clg);
console.log("마지막");