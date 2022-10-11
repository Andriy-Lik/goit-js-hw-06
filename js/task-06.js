// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його 
// вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість сиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна 
// кількість - червоним. Для додавання стилів використовуй CSS-класи valid і invalid, 
// які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }


const inputNameRef = document.querySelector('#validation-input');

inputNameRef.addEventListener('blur', onInputBlur);

function onInputBlur() {

    if (inputNameRef.value.length === Number(inputNameRef.dataset.length)) {
        inputNameRef.classList.remove('invalid');
        inputNameRef.classList.add('valid');
    } else {
        inputNameRef.classList.remove('valid');
        inputNameRef.classList.add('invalid');
    }
    return inputNameRef;
}
