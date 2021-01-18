
// let i = 1;
// while (i <=15) {
//     console.log(' Ученик, i');
//     i++;
// }

// let i = +prompt("Введи число: ") 
// let s = ""  
// while (i > 0) {     s = s + "#";     i--; } 
// console.log(s);


//  Введите число и выведите на экран отрицателтное положительное или равно нулю оно

// let num = +prompt('Введите число')
// if (num >0){
//  console.log('Ввведное число положительно')}
// else if (num<0){
//   console.log('Введенное число отрицательное')}
//  else if (num<0){
// console.log('Вы ввели ноль')}



//введите число а на экран вывелись все числа от введенного до 0
// let i = prompt('Введите число')
// while( i > 0) {
//     console.log( i )
// }



//Запросить число и степень Возведите число в указаную степень
// let i = prompt('Введите число степень');
// let power = prompt('Введите степень');
// let res = 1;
// while (power > 0) {
//     res * = i;
//     power--;
// }
// console.log(res);


//  запросить два числа и натйти все общие делители

// let i = +prompt('Введите число');
// let j = +prompt('Введите число 2');
// let a = i;
// if ( i < j ){
//     i = j,j = a;
// }
// let count = j;
//  while(count >0 ){
//      if (i % count== 0 && j % count==o){
//          console.log(count);
//      };
//      count--;
//  }



// Посчитать факториал введеного пользователем числа  

// let i = +rompt('');
// let res = 1;

// let count = j;

// while ( i>0 ){
//     res *=i;
//     i--;
// }
// console.log(res)



 //Предлагать пользователю решить пример 2 + 2 * 2  до тех пор пока пользователь не решит eё

//  let i;
//  do {
//      let i  = +prompt ('Htibnt ghbvth 2 + 2 * 2')
//  } while (i != 6 );



 //Делить число 1000 на 2 да тех пор пока не получится число меньше 50

//   let i = 1000;
//   let count = 0;

//   do {
//       i / 2;
//       count++
//   } while(i > 50);
//   console.log(i, count)
  


// let num = +prompt('Введите целое число') ;
// for (let i = 1; i < 100 ; i++){
//     if (i% num ==0){
//         console.log('i');
//     }
// }


// Ввести каждый 4ый элемент из указанного пользователем диапазона
// Пользователь указыввет минимальное и максимальное значение диапазона

// let num = +prompt('Введите целое число');
// let num2 =+prompt('Введите целое число');

// let min = 0;
// let max = 0;

// if (num > num2){
//      max = num, min = num2;
// } else { 
//     max = num2, min = num;
// }

// for (let i = min; i <= max; i +=4 ){
// console.log(i);
// }

 //Запрсить число и проверить простое ли оно. Простое число делиться без остатка токо на себя и еденицу

// let num = +prompt('Введите целое число');
// let count = 0;

//  for (let i = 2 ; i < num && count < 4 ; i ++ ) {
//         if (num % i == 0) {
//             count++ 
//         }
//     }

//     if (count == 2 ) { 
//         console.log('Число нпростое')
//     } else {
//          console.log('Число не простое')
//     }



//24 урок функции:


// let result = getMax (99, 165);

// alert( result );


// function getMax (a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
//   }

 //Написать ф кот выводит переданое число в указаную степень


// function getPower (num, power) {
//         return Math.pow(num, power);
//     }

// let num = +prompt ('Введите число');

// let result = getPower(num, 2);

// console.log(result);


 //Написать ф которая принимает 2 числа и знак () + - ; /) 
   
 let num1 = +prompt(' Введите число 1'),
     num2 = +prompt(' Введите число 2'),
     symb = prompt(' Введите действие  + - ; /'); 

function getCalc(num1, num2, symb = '+') {
        if (symb =='+'){
    return num1 + num2;
    }
    if (symb =='-'){
        return num1 - num2;
    }
    if (symb =='*'){
        return num1 * num2;
    }
    if (symb =='/'){
        return num1 / num2;
    }
    if (symb ==''){
        return num1 + num2;
    }
    }
 let result = getCalc(num1, num2, symb);

 console.log(result);
