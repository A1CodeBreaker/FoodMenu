'use strict';

const menu = {
  drinks: ['Water', 'Tea', 'Sweet Tea', 'Coke', 'Dr. Pepper', 'Sprite'],

  entrees: [
    'Hamburger w/ Fries',
    'Grilled Cheese w/ Tater Tots',
    'Grilled Chicken w/ Veggies',
    'Chicken Fried Steak w/ Mashed Potatoes',
    'Fried Shrimp w/ Coleslaw',
    'Veggie Plate',
  ],

  desserts: ['Cheesecake', 'Chocolate Cake', 'Snickerdoodle Cookie'],
};

const memberDisplayEl = document.getElementById('memberDisplay');
const categorySelectorEl = document.getElementById('categorySelector');
categorySelectorEl.onchange = onCategorySelectorChange;

const emptyMessage = new Option('-----');
memberDisplayEl.appendChild(emptyMessage);

function onCategorySelectorChange() {
  const selectedValue = categorySelectorEl.value;

  // use else if instead of multiple ifs to ensure only one block runs
  if (selectedValue === 'drinks') {
    getMenuOptions(menu.drinks);
  } else if (selectedValue === 'entrees') {
    getMenuOptions(menu.entrees);
  } else if (selectedValue === 'desserts') {
    getMenuOptions(menu.desserts);
  } else if (selectedValue === '') {
    memberDisplayEl.options.length = 0;
    memberDisplayEl.size = 0;
    const emptyMessage = new Option('-----');
    memberDisplayEl.appendChild(emptyMessage);
  }
}

function getMenuOptions(itemsList) {
  memberDisplayEl.size = itemsList.length;
  memberDisplayEl.options.length = 0;
  for (let i = 0; i < itemsList.length; i++) {
    const memberListbox = new Option(itemsList[i]);
    memberDisplayEl.appendChild(memberListbox);
  }
}
