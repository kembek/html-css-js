const now = Date.now();
const year = new Date().getFullYear();
const month = new Date().getMonth();
const day = new Date().getDate();
const week = new Date().getMinutes();

const oneDayMs = 24 * 60 * 60;
const oneYearMs = 365 * oneDayMs;
console.log(now - oneYearMs * year);
console.log(month);

console.log(("012").slice(-2));
