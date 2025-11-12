let date = new Date();
console.log(date);
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);
let Jan02_1970 = new Date(24*60*60*1000);
console.log(Jan02_1970);
console.log(Jan02_1970.getTime());
// 이 방식은 월만 0부터 시작해서 1 빼고 넣어야 하니..헷갈리네...
let date1 = new Date(2025, 11, 9, 16, 0, 0);
console.log(date1);
let date2 = new Date("2025-11-9/16:00:00");
console.log(date2);
console.log(date2.toLocaleDateString());
console.log(date2.toLocaleString());
console.log(date2.toLocaleTimeString());