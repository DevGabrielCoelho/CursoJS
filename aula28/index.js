//const data = new Date(2024, 09, 22, 15, 14, 27);
//const data = new Data("aaaa-mm-dd hh:MM:ss:ms");
const data = new Date("2024-10-22 15:14:27");
console.log(data.toString());
console.log(data.toUTCString());
console.log(data.toISOString());
console.log(data.toTimeString());

console.log(data.getDate());
console.log(data.getMonth() + 1);
console.log(data.getFullYear());
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());
console.log(data.getMilliseconds());
console.log(data.getDay() + 1);
console.log(Date.now());