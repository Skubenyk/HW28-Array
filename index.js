//* Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:

const productList = [
  (apple = {
    name: "apple",
    quantity: 2,
    status: "active",
    price: 13,
    sum: 26,
  }),
  (orange = {
    name: "orange",
    quantity: 1,
    status: "passive",
    price: 35,
    sum: 35,
  }),
  (milk = {
    name: "milk",
    quantity: 2,
    status: "passive",
    price: 36,
    sum: 62,
  }),
  (eggs = {
    name: "eggs",
    quantity: 20,
    status: "passive",
    price: 4,
    sum: 80,
  }),
  (flour = {
    name: "flour",
    quantity: 5,
    status: "active",
    price: 36,
    sum: 180,
  }),
];

console.log(productList);

//* Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

function showListStatus(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}
productList.sort(showListStatus("status"));
productList.forEach((product) => console.log(product.status));

//* Підрахунок суми всіх продуктів в списку.

const sumProductAll = () => {
  return apple.sum + orange.sum + milk.sum + eggs.sum + flour.sum;
};

const resultAll = sumProductAll();
console.log(resultAll);

//* Підрахунок суми всіх (не) придбаних продуктів.

const sumProductPassiv = () => {
  return apple.sum + flour.sum;
};

const resultPassiv = sumProductPassiv();
console.log(resultPassiv);

// *Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

function showListSum(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}
productList.sort(showListSum("sum"));
productList.forEach((product) => console.log(product.sum));


//* Видалення куплених продуктів із списку шляхом створення нового масиву

// productList.splice(1,3);
// console.log(productList);
