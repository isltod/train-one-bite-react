// undefined test
let varA;
if (varA) {
    console.log("값이 있음");
} else {
    console.log("값이 없음");
}

// 0 또는 NaN 테스트
const num = -0;
if (num) {
    console.log("양수이거나 음수입니다.");
} else {
    console.log("0, -0 또는 NaN입니다.");
}

// 빈 문자열 테스트
const str = "";
if (str) {
    console.log("문자열이 있습니다.");
} else {
    console.log("빈 문자열");
}
