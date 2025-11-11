const PI = 3.141592;

function getArea(radius) {
    return PI * radius * radius;
}

function getCircumference(radius) {
    return PI * radius * 2;
}

export default {PI, getArea, getCircumference};