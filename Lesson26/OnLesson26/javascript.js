//  1. Создать массив из 10 случайных чисел и написать несколько функций для работы с ним. 

//  let rand = Math.floor(Math,random() * 100);
//  let arr = [rand, 78, 23, 436, 34, 45, 12, 3, 11];


// //2. Функция принимает массив и выводит его на экран. 
// let rand = Math.floor(Math,random() * 100);
// let arr = [rand, 78, 23, 436, 34, 45, 12, 3, 11];

// function getArr (arr) {
//    for ( let i = 0; i < arr.lenghth; i++){
    
//    console.log(getArr)
// }
// }
// getArr(arr);



// //3. Функция принимает массив и выводит только четные элементы. 
//  let rand = Math.floor(Math,random() * 100);
//  let arr = [rand, 78, 23, 436, 34, 45, 12, 3, 11];

// function getArr (arr) {
//     for ( let i = 0; i < arr.lenghth; i++){
//         arr[i] % 2 ==0 }
//     console.log()
// }

// getArr(arr);



// //4. Функция принимает массив и возвращает сумму всех элементов массива.
// let rand = Math.floor(Math,random() * 100);
// let arr = [rand, 78, 23, 436, 34, 45, 12, 3, 11];
// let sum = 0;

// function getArr (arr) {
//    for ( let i = 0; i < arr.lenghth; i++){
//        sum += arr[i];
//    }
//    console.log()
// }

// getArr(arr);


// // 5.Функция принимает массив и возвращает его максимальный элемент.





// //6. Функция добавления нового элемента в массив по указанному индексу. 

// let rand = Math.floor(Math,random() * 100);
// let arr = [rand, 78, 23, 436, 34, 45, 12, 3, 11];


// function addNew (arr, i, val) {
//   let beforArr = arr.slice(0, i);
//   let afterArr = arr.slice(i, arr.lenghth );

//   beforArr.push(val);

//   let resultArr = beforArr.concat(afterArr);

//    console.log(resultArr);z
// }

// addNew(arr, 3, 30);


// //версия алекса
// // function addEl(arr, i, value) {     
// //     let newArr = [];     
// //     for (j = 0; j < i; j++) { 
// //                 newArr.push(arr[j])     } 
// //                     newArr.push(value)    
// //                      for (j = i; j < arr.length; j++) {         
// //                          newArr.push(arr[j])     }     
// //                          console.log(newArr) }  addEl(arr, 5, 100)




// // 7. Функция удаления элемента из массива по указанному индексу. 


// let rand = Math.floor(Math,random() * 100);
// let arr = [rand, 78, 23, 436, 34, 45, 12, 3, 11];


// function addNew (arr, i) {
//   arr.slice(i- 1, 1);
  
//    console.log(arr);
// }

// addNew(arr, 3, 30);


// // 8. Создать еще один массив из 5 случайных чисел и написать следующие функции

// // Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.

// let arr = [rand, 76, 7, 87, 76, 78, 98, 2, 6, 1];
// let arr2 = [rand, 76, 36, 45, 45, 44];

// let resultArr = [];

// function concatArrs (arr, arr2) {
    
//     for (let i = 0; i < arr.length; i++) {
//         if (resultArr.indexOf(arr[i]) == -1) {
//             resultArr.push(arr[i]);
//         }
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         if (resultArr.indexOf(arr2[i]) == -1) {
//             resultArr.push(arr2[i]);
//         }
//     }
//     console.log(resultArr);
// }

// concatArrs(arr, arr2);





// let arr = [rand, 76, 7, 87, 76, 78, 98, 2, 6, 1];
// let arr2 = [rand, 76, 36, 45, 45, 44];

// function concatArrs (arr, arr2) {

//     let resultArr = [];

//     let sumArr = arr.concat(arr2);
    
//     for (let i = 0; i < sumArr.length; i++) {
//         if (resultArr.indexOf(sumArr[i]) == -1) {
//             resultArr.push(sumArr[i]);
//         }
//     }
//     console.log(resultArr);
// }

// concatArrs(arr, arr2);


// // Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы 
// //(то есть элементы, которые встречаются и в первом и во втором массивах) без повторений. 

// let rand = Math.floor(Math.random() * 100);
// let rand2 = Math.floor(Math.random() * 100);

// let arr = [rand, 76, 7, 45, 76, 76, 76, 2, 6, 1];
// let arr2 = [rand2, 76, 36, 45, 45, 44];

// function concatArrs (arr, arr2) {

//     let resM = [], res = [];

//     for (let i = 0; i < arr.length; i++) {
//         let ress = arr2.some(function (elem) {
//             elem == arr[i]
//         });
//         if (ress) {
//             resM.push(arr[i]);
//         }
//     }

//     resM.sort();

//     console.log(resM);
    
//     for (let i = 0; i < resM.length; i++) {

//         if (resM[i] != resM[i + 1]) {
//             res.push(resM[i]);
//         }

//     }

//     console.log(res);
    
// }

// concatArrs(arr, arr2);
    



          
// 7. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве. 



// 7.1 Создать массив фруктов и отсортировать его по алфавиту. Написать следующие функции. 




//7.2 Вывод на экран с помощью document.write() в виде списка (с помощью тегов ul и li). 

// let arr = [ 'Яблоко', 'груша', 'дыня', 'арбуз']


// function getList (arr){

//     let list = '';
//     for(let i = 0; i< arr.lenghth; i++){
//         list = list + '<li>' + arr[i] + '</li>';
//     }
//     document.write('<li>' + list + '</li>');
// }
// getList(arr);


//7.3 Поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс найденного элемента или -1, 
// если не найден. Поиск должен быть не регистрозависимым.