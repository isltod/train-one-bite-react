function repeat(count, callBack) {
    for (let idx = 0; idx < count; idx++) {
        callBack(idx + 1);
    }
}

repeat(5, function(count) {
    console.log(count * 2);
});