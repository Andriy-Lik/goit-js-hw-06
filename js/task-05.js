// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, 
// у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const formRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

formRef.addEventListener('input', onFormSubmit);

// var 1
function onFormSubmit(event) {
    event.preventDefault();    
    event.currentTarget.value === "" 
    ? (spanRef.textContent = "Anonymous") 
    : (spanRef.textContent = event.currentTarget.value);
}

// var 2
// function onFormSubmit(event) {
//     event.preventDefault();
//     if (event.currentTarget.value === "") {
//         spanRef.textContent = "Anonymous"; 
//     } else {
//         spanRef.textContent = event.currentTarget.value 
//     };
// }
