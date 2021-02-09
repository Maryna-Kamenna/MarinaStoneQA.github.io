// // 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, 
// // необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.


// let arr = [{
//     title:'bread',
//     qantity: 2,
//     price: 15,
// },
// {
//     title: 'milk',
//     qantity: 1,
//     price: 25
// },
// {
//     title:'chikken',
//     qantity: 1,
//     price: 119
// },
// {
//     title: 'apple',
//     qantity: 3,
//     price: 17     
// },
// {
//     title: 'banana',
//     qantity: 2,
//     price: 30     
// }
// ];

// ]


// // Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

// letnewArr = shoppingList.concat();   //( это мы создали копию массива- так как при сортироваке sort - он измениет массив который мы сортируем  sortom)
//  console.log(shoppingList)

// function sortList(arr) {
//     arr.sort (function(a, b) {
//         return a.IsBought - b.IsBought;
//     })
//     console.log(arr)
// }
// sortList(shoppingList);




// // Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
// // необходимо увеличивать количество в существующей покупке, а не добавлять новую.

// function addItem(arr, item) {
//     let index = arr.findIndex (function (x) {
//     x.name === item.name} ) ;

//     if (index == -1){
//         arr.push({
//             name: item.name,
//             quantity: item.quantity,
//             IsBought: false
//         });
//     }else{
//         arr[index].quantity = item.quantity + item.quantity;
//     }
//      console.log(arr)
// }

// addItem (shoppingList, { name: 'lime', quantity: 2 });



// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

// let shoppingList = [
//     {
//         name: "Tekila",
//         quantity: 2,
//         IsBought: true,
//     },
//     {
//         name: "lime",
//         quantity: 4,
//         IsBought: false,
//     },
//     {
//         name: "whiskey",
//         quantity: 1,
//         IsBought: false,
//     },
//     {
//         name: "meat",
//         quantity: 5,
//         IsBought: true,
//     },
//     {
//         name: "beer",
//         quantity: 15,
//         IsBought: false,
//     },

// ]

// function buyItem(){ 

// let index = arr.findIndex (x => x.name === item);

// if ( index >= 0 && arr[index].IsBought != true){
//     arr[index].IsBought = true;
// }

// console.log(arr[index])

// buyItem(shoppingList, 'lime')





// // 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// // Распечатка чека на экран;
// let arr = [{
//     title:'bread',
//     qantity: 2,
//     price: 15,
// },
// {
//     title: 'milk',
//     qantity: 1,
//     price: 25
// },
// {
//     title:'chikken',
//     qantity: 1,
//     price: 119
// },
// {
//     title: 'apple',
//     qantity: 3,
//     price: 17     
// },
// {
//     title: 'banana',
//     qantity: 2,
//     price: 30     
// }
// ];

// function printChek(arr){
//     console.log('№','name', 'quantity', 'price');

//     for (let i = 0; i < arr.length; i++){
//         console.log( i + 1, arr[i].title, '|', arr[i].quantity, '|', arr[i].price, 'uah' );
//     }
// }

// printChek(arr);


// // Подсчет общей суммы покупки;

// let arr = [{
//     title:'bread',
//     qantity: 2,
//     price: 15,
// },
// {
//     title: 'milk',
//     qantity: 1,
//     price: 25
// },
// {
//     title:'chikken',
//     qantity: 1,
//     price: 119
// },
// {
//     title: 'apple',
//     qantity: 3,
//     price: 17     
// },
// {
//     title: 'banana',
//     qantity: 2,
//     price: 30     
// }
// ];

// function printChek(arr){
// let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//     sum += arr[i].price * arr[i].quantity 
//  } 
//  console.log('Итого:' + sum);


// printChek(arr);


// // Получение самой дорогой покупки в чеке;

// function printChek(arr){
//     let max = 0;
//     let name = '';
//         for (let i = 0; i < arr.length; i++) {
//             if (max < (arr[i].price * arr[i].quantity)) {
//                 max = arr[i].price * arr[i].quantity
//                 name = arr[i].title;
//             }
//      } 
//      console.log(`Сама дорогая покупка в чеке: ${name + '=' + max}`);
    
    
//     printChek(arr);

// // Подсчет средней стоимости одного товара в чеке.
 

// function printChek(arr){
//     let sum = 0;
//         for (let i = 0; i < arr.length; i++){
//         sum += arr[i].price * arr[i].quantity 
//      } 
// let all= arr.length;
// let ever = sum / all;

//      console.log('Средний чек ' + ever);
    
    
//     printChek(arr);

// // 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
// //  Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
// //  Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, 
// //  добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.



// let arr = [{
//     styleName:'color',
//     styleWalue: 'red'
//     },
//     {
//     styleName:'font-size',
//     styleWalue: '15px'
//     },
//     {
//     styleName:'background',
//     styleWalue: '#f5f5f5'
//     }
// ];
//  function buildNode(style, text){
//      let stylesList = '';
//      for ( let i = 0; i < stylesList.length; i++){
//          stylesList = stylesList + styles[i].styleName + ':' + styles[i].styleWalue + ';'
//      }
//      document.write(`<p style="${stylesList}">'${text} + </p> `);
//  }



// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^


let auditoriums = [
    {
        name: "Computer class 1",
        size: 15,
        faculty: "IT",
        // id: 1,
    },
    {
        name: "Computer class 2",
        size: 19,
        faculty: "IT",
        // id: 2,
    },
    {
        name: "Phys laboratory 1",
        size: 16,
        faculty: "Physics",
        // id: 3,
    },
    {
        name: "Phys laboratory 2",
        size: 13,
        faculty: "Physics",
        // id: 4,
    },
    {
        name: "English class",
        size: 12,
        faculty: "Foreign Languages",
        // id: 5,
    },
    {
        name: "Klingon class",
        size: 18,
        faculty: "Foreign Languages",
        // id: 5,
    },
]
show: function(){

}

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).


