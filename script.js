"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a && b && a.length <= 50 && b.length <= 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (+personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (+personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (+personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Введите ваши любимые жанры через запятую`, '').toLowerCase();
            
            if (genres === null || genres === '') {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр номер ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else{
            personalMovieDB.private = true;
        }
    }
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.showMyDB(personalMovieDB.private);

personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB(personalMovieDB.private);

// personalMovieDB.showMyDB(personalMovieDB.private);

console.log(personalMovieDB);

// Срез строки работает и без последнего символа:
// если таким образом указать, то обрезано будет с данного символа и до конца.

// Если в срезе указать отрицательные значения, то счёт индексов смволов будет начат не с начала, а с конца.

// Для среза строки можно использовать substring (не работает с отрицательными значениями)
// и substr (вместо последнего символа указывается необходимая длинна среза).
