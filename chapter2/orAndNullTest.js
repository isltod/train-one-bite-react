const varA = 0;
const varB = "wolf";

// 이건 첫번째가 false라서 뒤에거까지 하고 그걸 넘긴다..
console.log(varA || varB);
// 얘는 null과 undefined만 아니면 그만이라, 첫 번째만 보고 그걸로 맞춘다...
console.log(varA ?? varB);