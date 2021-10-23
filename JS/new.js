const btns = document.querySelectorAll('button'),
  wrapper = document.querySelector('.button-block'); // родительский элем от button

console.log(btns[0].classList.item(0)); // получить класс
console.log(btns[0].classList.add('red', 'pink')); // добавить класс
console.log(btns[0].classList.remove('blue')); // убрать класс
console.log(btns[0].classList.toggle('blue')); // вкл-выкл класс

if (btns[1].classList.contains('red')) {
  console.log('red');
} // условие для проверки наличия класса 

btns[0].addEventListener('click', (e) => { // 
  if (!e.classList.contains('red')) {
    e.classList.add('red');
  } else {
    e.classList.remove('red');
  }
});

// console.log(btns[0].className); //устар

wrapper.addEventListener('click', (event) => {
  if (event.target && event.target.tagName == 'BUTTON' || event.target.classList.contains('red') || event.target.matches('button.red')) {
    //условия для делегирования

  }
});

const btn = document.createElement('button'); //созд кнопку
btn.classList.add('red'); // добавл класс
wrapper.append(btn); // помещаем на страницу