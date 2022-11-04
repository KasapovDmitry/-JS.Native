"use strict";
// НАЖАТЬ НА КНОПКУ 1 РАЗ И ЗАКОМЕНТИРОВАТЬ ТЕКСТ
//Добавляем пустой массив-контейнер для объектов

let block = document.querySelector('.for-start');
let div = document.createElement('div');
div.className = "hidden-btn";
div.innerHTML = "<strong>Добавить массив в LS</strong>";
block.append(div);
function addarr() {
   let people = [];
localStorage.setItem('people', JSON.stringify(people));
document.querySelector('.hidden-btn').style.display = 'none';
}
document.querySelector('.hidden-btn').onclick = addarr;
// код вверху нужно закоментировать


let screen1 = document.querySelector('.screen-1');
let screen2 = document.querySelector('.screen-2');
let screen3 = document.querySelector('.screen-3');
let person;
let objLoc = localStorage.getItem('people');
let checkCount = 1;

// ПЕРЕХОД НА АВТОРИЗАЦИЮ
document.querySelector('.for-registr-link').onclick = function() {
    screen1.classList.add('hidden');
    screen2.classList.remove('hidden');
}

// АВТОРИЗАЦИЯ
// Проверка заполнены ли поля
function check(val) {
    if( val === '' ){
        checkCount = 0;
            alert("Вы не заполнили одно из полей! Заполните все поля!");
        return checkCount;
      }
}
// Проверка логина
function checkLogin(log) {
    let loginLoc = localStorage.getItem('people');
    loginLoc = JSON.parse(objLoc);
    loginLoc.forEach(elem => {
        if (elem.login === log) {
            alert("Такой логин уже существует! Выберите другой логин!");
            checkCount = 0;
            return checkCount;
        } 
    });
}

// Создаем объект с данными от регистрации
function register() {
    // новый объект
    person = {};

    let _name = document.querySelector('.name').value;
    let _login = document.querySelector('.login').value;
    let _password = document.querySelector('.password').value;

    // проверка полей на заполнение
    check(_name);
    check(_login);
    check(_password);

    // проверка логина на заполнение
    checkLogin(_login);

    // заполняем объект данными
    if (checkCount == 1 ) {
        person['name'] = _name;
        person['login'] = _login;
        person['password'] = _password;
        return person; 
    } 
} 

function checkLoc() {
    register();
    // добавляем новый объект в массив с данными
    if (checkCount == 1){
        objLoc = JSON.parse(objLoc);
        objLoc.push(person);
        localStorage.setItem('people', JSON.stringify(objLoc));
        screen2.classList.add('hidden');
        screen1.classList.remove('hidden');
        document.querySelector('.info-text').innerHTML = "Авторизация прошла успешно, можете войти";
    } 
// Очистить хранилище
//localStorage.clear();
}

document.querySelector('.btn').onclick = checkLoc;

// РЕГИСТРАЦИЯ 
let log1 = document.querySelector('.log1');
let pass1 = document.querySelector('.pass1');
let arr;

function enter() {
    addArr();
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            if (arr[i].login === log1.value) {
                checkCount = 2;
                if (arr[i].password !== pass1.value) {
                    alert("Неверный пароль!");
                    checkCount = 0;
                    return checkCount;
                } else {
                    screen1.classList.add('hidden');
                    screen3.classList.remove('hidden');
                    document.querySelector('.user-name').innerHTML = arr[i].name;
                }
                
                return checkCount;
            }
        }

    noEnter();
    checkCount = 1;
}

function noEnter() {
    if (checkCount == 1) {
        alert("Неверный логин!");
    }
}
function addArr() {
    let objLoc = localStorage.getItem('people');
    arr = JSON.parse(objLoc);
}

document.querySelector('.btn1').onclick = enter;











