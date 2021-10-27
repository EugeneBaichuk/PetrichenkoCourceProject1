'use strict';


// 1) контекст вызова this у обычной функции = window, но если use strict - undefined

// function showThis(a, b) {
//   console.log(this);

//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4, 5);

// 2) Контекст у методов объекта - сам объект

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this);
//   }
// };

// obj.sum();

// 3). this в конструкторах и классах - это новый экземпляр объекта

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log('Hello ' + this.name);
//   };
// }

// let Ivan = new User('Ivan', 23);

// 4). Присвоение контекста this вручную: call, apply, bind

function sayName(surname) {
  console.log(this);
  console.log(this.name + ' ' + surname);
}

const user = {
  name: 'John'
};

sayName.call(user, 'Smith'); // разница в синтаксисе
sayName.apply(user, ['Smith']);

function count(num) {
  return this * num;
}

const double = count.bind(2); // double - функция которая удваивает count, аргумент  double(5) присваивается в num

console.log(double(5));
console.log(double(13));

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  this.style.backgroundColor = 'red'; // this = btn
});
// стрелочная функция не имеет контекста и обращается к контексту родителя
const obj = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this.num); // this - 5 так как стрелочная функция возвращает контекст родителя
    };
  }
};

obj.sayNumber();

const doublej = (a, b) => a * 2;