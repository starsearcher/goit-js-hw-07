const buttonIncrement = document.querySelector('button[data-action = increment]');
const buttonDecrement = document.querySelector('button[data-action = decrement]');

buttonIncrement.addEventListener('click', increment);
buttonDecrement.addEventListener('click', decrement);

const counterValue = document.querySelector('#value');
let counter = 0;

function increment(event) {
    counter += 1;
    counterValue.textContent = counter;
};

function decrement(event) {
    counter -= 1;
    counterValue.textContent = counter;
};

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>