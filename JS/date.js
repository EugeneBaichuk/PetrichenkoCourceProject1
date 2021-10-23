'use strict';
const now = new Date(); // текущая дата отгода до миллисек
//new Date('2021-10-21');
//new Date.parse('2021-10-21');

console.log(now.getFullYear()); // текущий год
console.log(now.getMonth()); // текущий месяц
console.log(now.getDate()); // текущий день
console.log(now.getDay()); // текущий день недели воскр - 0 сб - 6
console.log(now.getUTCHours()); // часы в формате UTC
console.log(now.getTimezoneOffset()); // разница между UTC часовым поясом и текущим в минутах
console.log(now.getTime()); // количество миллисекунд с 1970 года

console.log(now.setHours(18)); // установить часы (браузер уст дату с компьтера), VSCode выдает формат UTC


let start = new Date(); // измерение отрезка времени

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`);