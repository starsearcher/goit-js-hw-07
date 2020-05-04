const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");
const defaultValue = output.textContent;

input.addEventListener("input", handleInputChange);

function handleInputChange(event) {
    event.currentTarget.value ?
        (output.textContent = event.currentTarget.value) :
        (output.textContent = defaultValue);
}

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>