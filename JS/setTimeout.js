const btn = document.querySelector('.btn');
let timerId,
  i = 0;

// btn.addEventListener('click', () => {
//   // timerId = setTimeout(function (text) {
//   //   console.log(text);
//   // }, 2000, 'Hello'); // функция для установки таймера на 2 сек (2000 мс), в конце можно передавать аргументы
//   timerId = setInterval(function (text) { // установить интервал (каждые 2 сек сраб ф-ция)
//     console.log(text);
//   }, 2000, 'Hello');
// });

const timer = setTimeout(logger, 2000); // можно задать функцию

function logger() {
  console.log('Hello');
  i++;
  if (i === 3) {
    clearInterval(timerId); // сбросить выполнение функции, ф-ция setInterval не учитывает время выполнения 
    // самой ф-ции,если она вып-ся 3 сек - таймер сбивается и вып-ся сразу, лучше рекурсивная ф-ция.
  }
}
let id = setTimeout(function log() { //рекурсивная функция
  console.log('Hello');
  id = setTimeout(log, 500);
}, 500);


btn.addEventListener('click', myAnimation);

function myAnimation() { //ф-ция анимации квадратика
  const elem = document.querySelector('.box');
  let pos = 0;
  const id = setInterval(frame, 10);

  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}