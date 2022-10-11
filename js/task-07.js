// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, 
// перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputChangeFontSizeRef = document.querySelector('#font-size-control');
const spanChangeFontSizeRef = document.querySelector('#text');

inputChangeFontSizeRef.addEventListener('input', onChangeFontSizeInput);

function onChangeFontSizeInput(event) {
    let fontSizeValue = event.currentTarget.value;
    spanChangeFontSizeRef.style.fontSize = `${fontSizeValue}px`;
};

