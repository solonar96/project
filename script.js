"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        // if (a === null || a === false || a.length > 50 || b === null || b === false || b.length > 50) {
        //     a = prompt('Один из последних просмотренных фильмов?', ''),
        //     b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (+personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (+personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (+personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();

console.log(personalMovieDB);

// Срез строки работает и без последнего символа:
// если таким образом указать, то обрезано будет с данного символа и до конца.

// Если в срезе указать отрицательные значения, то счёт индексов смволов будет начат не с начала, а с конца.

// Для среза строки можно использовать substring (не работает с отрицательными значениями)
// и substr (вместо последнего символа указывается необходимая длинна среза).

// Ещё одно изменение
