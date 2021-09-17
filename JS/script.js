"use strict";

let numberOfFilms;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '');
      const b = prompt('На сколько оцените его?', '');

      if (a != "" && b != "" && a != null && b != null && a.length <= 50 && b.length <= 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено слишком мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 50) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 10) {
      console.log('Вы киноман');
    }
  },
  showMyDB: function () {
    personalMovieDB.toggleVisibleMyDB();
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
      if (genres == null && genres == '') {
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.genres.forEach((item, i) => {
  console.log(`Любимый жанр ${i + 1} - это ${item}`);
});

console.log(personalMovieDB);