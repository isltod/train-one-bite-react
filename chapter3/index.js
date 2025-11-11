console.log("index.js 실행됨...");

// import {PI, getArea, getCircumference} from "./circle.js";
// console.log(PI, getArea(3), getCircumference(3));

// 또는 다른 형식으로...
// import * as circle from "./circle.js";
// console.log(circle.PI, circle.getArea(3), circle.getCircumference(3));

// default 옵션으로 export하면 위에 두 가지는 작동 안하고,
import one from "./circle.js";

console.log(one.PI, one.getArea(3), one.getCircumference(3));