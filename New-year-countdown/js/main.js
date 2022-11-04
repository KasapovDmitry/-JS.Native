// Определяем действующие элементы на странице
const year = document.querySelector('#year');

const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// На прелоадер
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

// Делаем расчеты
const currentYear = new Date().getFullYear();
const nextYear = new Date('January 01 2023 00:00:00');

// Год на странице
year.innerText = currentYear + 1;

function updateCounter() {
    const currentTime = new Date();
    const diff = nextYear - currentTime;

    // Перевод в секунды / минуты / часы / дни
    // Перевод в дни
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    // Часов осталось
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    // Минут осталось
    const minutesLeft = Math.floor(diff / 1000 / 60 ) % 60;
    // Секунд осталось
    const secondsLeft = Math.floor(diff / 1000 ) % 60;

    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

    days.innerText = daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

}

updateCounter();

// Запуск расчета каждую секунду
setInterval(updateCounter, 1000);

// Прелоадер - счетчик
setTimeout(function() {
    preloader.remove();
    countdown.style.display = 'flex';

}, 1000);




