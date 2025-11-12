function moveMonth(date, moveMonth) {
    const curTimestamp = date.getTime();
    const curMonth = date.getMonth();
    const resDate = new Date(curTimestamp);
    resDate.setMonth(curMonth + moveMonth);
    return resDate;
}

const dateA = new Date("2000-10-10");
console.log("A: ", dateA);

const dateB = moveMonth(dateA, 1)
console.log("B: ", dateB);

const dateC = moveMonth(dateA, -1);
console.log("C: ", dateC);