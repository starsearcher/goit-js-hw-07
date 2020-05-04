const placeForBoxes = document.querySelector('div#boxes');
const renderBtn = document.querySelector('#controls>button[data-action="render"]');
const destroyBtn = document.querySelector('#controls>button[data-action="destroy"]');
const input = document.querySelector('#controls>input');

let userInput;

renderBtn.addEventListener('click', (e) => {
    userInput = input.value;
    const boxesToDraw = createBoxes(userInput);
    placeForBoxes.append(...boxesToDraw);
});

destroyBtn.addEventListener('click', (e) => {
    destroyBoxes();
    input.value = '';
});

function createBoxes(amount) {
    let boxes = [];
    let startSide = 30;
    for (let i = 0; i < amount; i++) {
        let box = document.createElement('div');
        box.style.width = startSide + 'px';
        box.style.height = startSide + 'px';
        startSide += 10;
        box.style.backgroundColor = getRandomRGB();
        boxes.push(box);
    }
    return boxes;
}

function destroyBoxes() {
    placeForBoxes.innerHTML = '';
};

function getRandomRGB() {
    const r = getRandomInt(256);
    const g = getRandomInt(256);
    const b = getRandomInt(256);
    return `rgb(${r}, ${g}, ${b})`;
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>