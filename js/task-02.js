// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients')

const makeIngredientsItem = options => {
  return options.map(option => {
    const liEl = document.createElement("li");
    liEl.textContent = option;
    liEl.classList.add('item');

    return liEl;
  });
};

const elements = makeIngredientsItem(ingredients);
ingredientsListEl.append(...elements);
