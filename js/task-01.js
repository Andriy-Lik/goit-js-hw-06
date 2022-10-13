// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку 
// елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const ulEl = document.querySelectorAll('.item');
console.log('Number of categories: ', ulEl.length);
console.log('');

ulEl.forEach(item => {
    console.log('Category: ', item.firstElementChild.textContent);
    console.log('Elements: ', item.lastElementChild.children.length);
    console.log(' ');
})

// const allCategory = document.querySelectorAll('.item h2');
// const numListElem = document.querySelectorAll('.item ul');

// console.log('Category: ', allCategory[0].innerHTML);
// console.log('Elements: ', numListElem[0].children.length);

// console.log('Category: ', allCategory[1].innerHTML);
// console.log('Elements: ', numListElem[1].children.length);

// console.log('Category: ', allCategory[2].innerHTML);
// console.log('Elements: ', numListElem[2].children.length);

