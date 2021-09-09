"use strict";

let numberOfFilms;

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};



rememberMyFilms();

detectPersonalLevel();

showMyDB();

writeYourGenres();

console.log(personalMovieDB);


function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его?', '');

    if (a != "" && b != "" && a != null && b != null && a.length <= 50 && b.length <= 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено слишком мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 50) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 10) {
    console.log('Вы киноман');
  }
}

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Введите ваш любимый жанр ${i}`);
  }
}