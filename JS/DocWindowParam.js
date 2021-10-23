'use strict';

//document - объект который содержит все содержимое страницы

const box = document.querySelector('.box'),
  btn = document.querySelector('button');

const width = box.clientWidth; // ширина элемента без учета margin и полосы прокрутки
const height = box.clientHeight; //-//- высота
const width1 = box.offsetWidth; //ширина элемента с учетом margin и полосы прокрутки
const height1 = box.offsetHeight; //-//- высота
const width2 = box.offsetWidth; //ширина элемента элемента включая зону прокрутки
const height2 = box.offsetHeight; //-//- высота

btn.addEventListener('click', () => { // при клике развернуть элемент
  box.style.height = box.scrollHeight + 'px';
  //console.log(box.scrolltop); // показывает сколько элемента пролистано сверху
});

console.log(box.getBoundingClientRect()); // получить коорд. элемента (счит от правого верхнего угла)
// в браузере в консоли во вкладке elements - computed можно посмотреть какие размеры у элемента в пикскляхб даже 
//если они установлены в процентах. Можно только смотреть - менять напрямую нельзя

const style = window.getComputedStyle(box);
console.log(style.display);

console.log(document.documentElement.scrollTop); // просто у document нет такого свойства, можно модифицировать и 
// присваивать значение - например для стрелочки которая меняет положение на странице
console.log(window.scrollBy(0, 400)); // скролл на 400 пикс вниз
console.log(window.scrollTo(0, 400)); // скролл на 400 пикс по отношению ко всей странице