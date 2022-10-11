// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати 
// його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та 
// ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');
const counterValueRef = document.querySelector('#value');
let counterValue = 0;
// counterValueRef.textContent = counterValue;

function onSubBtnClick() {
    // console.log('Клик');
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
    // console.log(counterValue);
}

function onAddBtnClick() {
    // console.log('Клик');
    counterValue += 1;
    counterValueRef.textContent = counterValue;
    // console.log(counterValue);
}

btnDecrementRef.addEventListener('click', onSubBtnClick);
btnIncrementRef.addEventListener('click', onAddBtnClick);
