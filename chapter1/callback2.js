function repeat(count, callBack) {
    for (let idx = 0; idx < count; idx++) {
        callBack(idx + 1);
    }
}

const double = function(count) {
    console.log(count * 2);
}

repeat(5, double);