"use strict";
/*
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', '');
  const b = prompt('На сколько оцените его?', '');

  if (a != "" && b != "" && a != null && b != null && a.length <= 50 && b.length <= 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}
let i = 0;
while (i < 2) {
  const a = prompt('Один из последних просмотренных фильмов?', '');
  const b = prompt('На сколько оцените его?', '');
  i++;
  if (a != "" && b != "" && a != null && b != null && a.length <= 50 && b.length <= 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

let i = 0;
do {
  const a = prompt('Один из последних просмотренных фильмов?', '');
  const b = prompt('На сколько оцените его?', '');
  i++;
  if (a != "" && b != "" && a != null && b != null && a.length <= 50 && b.length <= 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}
while (i < 2);

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
  console.log('Просмотрено слишком мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 50) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 10) {
  console.log('Вы киноман');
}*/

const logg = 'Hello world';

console.log(logg.slice(6, 10));