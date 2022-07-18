/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "логан",
            "лига справедливости",
            "ла-ла лэнд",
            "одержимость",
            "скотт пилигрим против..."
        ]
    };
    
    const ads = document.querySelectorAll(".promo__adv img"),
          genres = document.querySelectorAll(".promo__genre"),
          bg = document.querySelector(".promo__bg"),
          items = document.querySelectorAll(".promo__interactive-item"),
          list = document.querySelector(".promo__interactive-list"),
          input = document.querySelector(".adding__input"),
          submitBtn = document.querySelector(".adding__submit"),
          checkbox = document.querySelector('input[type=checkbox]');
    
    ads.forEach(item => {
        item.remove();
    });
    genres[0].textContent = "драма";
    bg.style.background = "url('../img/bg.jpg') center center/cover no-repeat";
    
    function updateFilmsList() {
        //creating list of films
        if (input.value.length > 0) {
            if (input.value.length > 21) {
                input.value = input.value.substr(0, 22);
                input.value += "...";
            }
            input.value = input.value.toLowerCase();
            movieDB.movies.push(input.value);
            input.value = "";
        }
        movieDB.movies.sort();
        list.innerHTML = "";
        movieDB.movies.forEach((item, i) => {
            list.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${item}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll(".delete").forEach((deleteBtn, i) => { 
            deleteBtn.addEventListener("click", () => {
                //deleteBtn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                updateFilmsList();
            });
        });
    }
        
    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (checkbox.checked) {
            console.log("Добавляем любимый фильм");
            checkbox.checked = false;
        }
        updateFilmsList();
    });
    
    updateFilmsList();
});