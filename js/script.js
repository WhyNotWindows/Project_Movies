/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ads = document.querySelectorAll(".promo__adv img"),
      genres = document.querySelectorAll(".promo__genre"),
      bg = document.querySelector(".promo__bg"),
      items = document.querySelectorAll(".promo__interactive-item"),
      list = document.querySelector(".promo__interactive-list");

ads.forEach(item => {
    item.remove();
});
genres[0].textContent = "драма";
bg.style.background = "url('../img/bg.jpg') center center/cover no-repeat";

//creating list of films
movieDB.movies.sort();
items.forEach(item => {
    item.remove();
});
//list.innerHTML = "";
movieDB.movies.forEach((item, i) => {
    let newItem = document.createElement('li');
    newItem.classList.add('promo__interactive-item');
    list.append(newItem);
    newItem.textContent = `${i + 1}. ${item}`;
});