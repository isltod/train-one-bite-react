const dateArray = [
    new Date("2000-10-1"),
    new Date("2000-10-31"),
    new Date("2000-11-1"),
    new Date("2000-9-30"),
    new Date("1900-10-11"),
];

const today = new Date("2000-10-10/00:00:00");
const filteredArray = filterThisMonth(today, dateArray);
console.log(filteredArray);

function filterThisMonth(pivotDate, dateArray) {
    const year = pivotDate.getFullYear();
    const month = pivotDate.getMonth();
    const startDay = new Date(year, month, 1, 0, 0, 0);
    const endDay = new Date(year, month + 1, 0, 23, 59, 59);

    const resArr = dateArray.filter(
        (it) => startDay.getTime() <= it.getTime() && it.getTime() <= endDay.getTime()
    );
    return resArr;
}