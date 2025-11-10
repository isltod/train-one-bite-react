function repeat(count, callBack) {
    for (let idx = 0; idx < count; idx++) {
        callBack(idx + 1);
    }
}

function double(count) {
    console.log(count * 2);
}

repeat(5, double);